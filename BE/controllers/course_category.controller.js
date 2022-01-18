// const db = require("../models");
// const Product = db.Products; //! IMPORTANT - models / Products
const db = require("../config/sequelize.config");
const ProductCategory = require('../models/ProductCategory');


/**
 * Gets all productCategories
 * @param {Express.request} req
 * @param {Express.response} res 
 * @returns Returns productCategories if found, else returns 404 not found.
 */
 exports.findAllProductCategories = async(req, res) => {
    const productCategories = await ProductCategory.findAll();

    if (!productCategories) {
        return res.status(404).send({
            message: `No product category found.`,
        });
    }

    return res.status(200).send(productCategories);
};

/**
 * Gets product category by id
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @returns Returns product category if found, otherwise returns 404 not found.
 */
exports.getProductCategory = async(req, res) => {
    console.log("ProductCategory controller");
    const { id } = req.params;
    const productCategory = await ProductCategory.findOne({ where: { id } });

    if (!productCategory) {
        return res.status(404).send({
            message: `No productCategory found with the id ${id}`,
        });
    }

    return res.status(200).send(productCategory);
};

/**
 * Creates new productCategory
 * The user has to pass the jwtValidation
 * @param {Express.Request} req Request that includes productCategory information that are productId, categoryId
 * @param {Express.Response} res Includes created productCategory's data
 * @returns Returns 201 if succeeded.If the data is not valid or already exists in the database return 400, bad request.
 */
 exports.createProductCategory = async(req, res) => {
    const { productId, categoryId } = req.body;
    // Checks if the productId and categoryId exist.
    if ( !productId || !categoryId ) {
        return res.status(400).send({
            message: "You need to fill in all fields.",
        });
    }

    // Checks if the productId and productCategory exist in the database.
    let productId_categoryIdExists = await ProductCategory.findOne({
        where: { productId, categoryId }
    });
    if (productId_categoryIdExists) return res.status(400).send({message: `A product category entry with the productId ${productId} and categoryId ${categoryId} already exists!`});
    
    // Create productCategory
    try {
        let newProductCategory = await ProductCategory.create({
            productId,
            categoryId
        });
        return res.status(201).send(newProductCategory);
    } catch (err) {
        return res.status(500).send({
            message: `Error : ${err.message}`,
        });
    }
};

/**
 * Updates productCategory
 * The user has to pass jwtValidation
 * @param {Express.Request} req Request that includes productCategory information that are productId, categoryId
 * @param {Express.Response} res b
 * @returns the response
 */
exports.updateProductCategory = async(req, res) => {
    const { productId, categoryId } = req.body;
    const { id } = req.params;

    const productCategory = await ProductCategory.findOne({where: { id } });

    if (!productCategory) {
        return res.status(400).send({
            message: `No productCategory exists with the id ${id}`,
        });
    }

    try {
        //TODO: refactor
        if (productId) {
            productCategory.productId = productId;
        }
        if (categoryId) {
            productCategory.categoryId = categoryId;
        }
        productCategory.save();
        return res.status(200).send({
            message: `ProductCategory with id ${id} has been updated!`,
        });
    } catch (err) {
        return res.status(500).send({
            message: `Error : ${err.message}`,
        });
    }
};

/**
 * Deletes productCategory
 * The user has to pass jwtValidation
 * @param {Express.Request} req Request that includes productCategory id as params
 * @param {Express.Response} res 
 * @returns 
 */
exports.deleteProductCategory = async(req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).send({ message: `Please provide the ID of the productCategory you are trying to delete.` });
    

    const productCategory = await ProductCategory.findOne({ where: { id } });

    if (!productCategory) {
        return res.status(400).send({ message: `No productCategory exists with the id ${id}` });
    }

    try {
        await productCategory.destroy();
        return res.status(204).send({ message: `ProductCategory ${id} has been deleted.` });
    } catch (err) {
        return res.status(500).send({
            message: `Error : ${err.message}`,
        });
    }
};
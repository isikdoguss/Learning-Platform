// const db = require("../models");
// const Category = db.Categories; //! IMPORTANT - models / Categories
const db = require("../config/sequelize.config");
const Category = require('../models/Category');


/**
 * Gets parent categories only
 * @param {Express.request} req 
 * @param {Express.response} res 
 * @returns 
 */
exports.getParentCategories = async(req, res) => {
    const categories = await Category.findAll({where:{ parentId: null }});

    if (!categories) {
        return res.status(404).send({
            message: `No parent category found.`,
        });
    }

    return res.status(200).send(categories);
};

/**
 * Gets all child categories of the parent category
 * @param {Express.request} req 
 * @param {Express.response} res 
 * @returns 
 */
exports.findAllChildCategories = async(req, res) => {
    const { parentId } = req.params;
    const categories = await Category.findAll({ where: { parentId: parentId }});

    if (!categories) {
        return res.status(404).send({
            message: `No child category found.`,
        });
    }

    return res.status(200).send(categories);
};

/**
 * Gets all categories
 * @param {Express.request} req
 * @param {Express.response} res 
 * @returns Returns categories if found, else returns 404 not found.
 */
 exports.findAllCategories = async(req, res) => {
    const categories = await Category.findAll();

    if (!categories) {
        return res.status(404).send({
            message: `No category found.`,
        });
    }

    return res.status(200).send(categories);
};

/**
 * Gets category by id
 * @param {Express.request} req request that includes id
 * @param {Express.response} res 
 * @returns Returns category if founds, else returns 404 not found.
 */
exports.getCategory = async(req, res) => {

    const { id } = req.params;
    const category = await Category.findOne({ where: { id } });

    if (!category) {
        return res.status(404).send({
            message: `No category found with the id ${id}`,
        });
    }

    return res.status(200).send(category);
};

//TODO: user info comes with the token. If the jwtValidation middleware returns an access denied, the user data can be logged.
/**
 * Creates new category
 * The user has to pass jwtValidation
 * @param {Express.request} req Request that includes category information that are name, parentId
 * @param {Express.response} res Includes created category's data
 * @returns Returns 201 if succeeded.If the data is not valid or already exists in the database return 400, bad request.
 */
 exports.createCategory = async(req, res) => {
    const { name, parentId } = req.body;
    // Checks if the category name exists. parentId can be null if the category is a master.
    if ( !name ) {
        return res.status(400).send({
            message: "You need to fill in all fields.",
        });
    }

    // Checks if the category name exists
    let categoryExists = await Category.findOne({
        where: { name }
    });
    if (categoryExists) return res.status(400).send({message: `A category named ${name} already exists!`});
    
    // Create category
    try {
        let newCategory = await Category.create({
            name,
            parentId
        });
        return res.status(201).send(newCategory);
    } catch (err) {
        return res.status(500).send({
            message: `Error : ${err.message}`,
        });
    }
};

/**
 * Updates category
 * The user has to pass jwtValidation
 * @param {Express.request} req Request that includes category information that are name, parentId <nullable>
 * @param {Express.response} res 
 * @returns 
 */
exports.updateCategory = async(req, res) => {
    const { name, parentId } = req.body;
    const { id } = req.params;

    const category = await Category.findOne({where: { id } });

    if (!category) {
        return res.status(400).send({
            message: `No category exists with the id ${id}`,
        });
    }

    try {
        //TODO: refactor
        if (name) {
            category.name = name;
        }
        if (parentId) {
            category.parentId = parentId;
        }
        category.save();
        return res.status(200).send({
            message: `Category ${name} has been updated!`,
        });
    } catch (err) {
        return res.status(500).send({
            message: `Error : ${err.message}`,
        });
    }
};

/**
 * Deletes category
 * The user has to pass jwtValidation
 * @param {Express.request} req Request that includes category id as params
 * @param {Express.response} res 
 * @returns 
 */
exports.deleteCategory = async(req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).send({ message: `Please provide the ID of the category you are trying to delete.` });
    

    const category = await Category.findOne({ where: { id } });

    if (!category) {
        return res.status(400).send({ message: `No category exists with the id ${id}` });
    }

    try {
        await category.destroy();
        return res.status(204).send({ message: `Category ${id} has been deleted.` });
    } catch (err) {
        return res.status(500).send({
            message: `Error : ${err.message}`,
        });
    }
};
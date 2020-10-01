const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = require('graphql')
const models = require("../../models")
const _ = require('lodash')


module.exports = {
    name: 'modelos',
    type: new GraphQLList(new GraphQLObjectType({
        name: 'Modelos',
        fields: () => ({
            name: {
                type: GraphQLString
            },
            physicalName: {
                type: GraphQLString
            }
        })
    })),
    args: {
        page: {
            type: GraphQLInt
        },
        pageSize: {
            type: GraphQLInt
        }
    },
    resolve: (parent, args, context) => {
        let excludeModels = ['Sequelize', 'sequelize', 'Op']

        let results = []
        for (var m in models) {
            if (models.hasOwnProperty(m) && !excludeModels.includes(m)) {
                results.push({
                    name: _.startCase(_.toLower(m.replace('_', ' '))),
                    physicalName: m
                })
            }
        }

        return results
    }
}


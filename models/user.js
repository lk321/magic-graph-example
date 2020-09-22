module.exports = function (sequelize, DataTypes) {
    const Model = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(65),
            allowNull: false
        },
        full_name: {
            type: DataTypes.VIRTUAL,
            get: function () { return `${this.name} - ${this.last_name}` }
        },
        email: {
            type: DataTypes.STRING(120),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        position: {
            type: DataTypes.STRING(65),
            allowNull: true
        },
        github: {
            type: DataTypes.STRING(65),
            allowNull: true
        },
        company_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'company',
                key: 'id'
            }
        },
        password: {
            type: DataTypes.STRING(120),
            allowNull: false,
            defaultValue: 'Generic pswd'
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        tableName: 'user',
        resolvers: {
            query: {
                // Create customs queries
            },
            mutation: {
                // Create customs mutations	
            }
        }
    })

    Model.associate = function (models) {
        Model.belongsTo(models.company, {
            foreignKey: 'company_id'
        })
    }

    return Model
}
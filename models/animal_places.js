/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'animal_places',
        {
            place_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            animal_count: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: '0'
            },
            place: {
                type: DataTypes.ENUM(
                    'bardzo slaby',
                    'slaby',
                    'przecietny',
                    'dobry',
                    'bardzo dobry'
                ),
                allowNull: false
            }
        },
        {
            tableName: 'animal_places'
        }
    );
};

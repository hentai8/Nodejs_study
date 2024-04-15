const { Sequelize, DataTypes, Transaction } = require("sequelize");
const sequelize = new Sequelize("alephium", "root", "1007", {
  host: "localhost",
  dialect: "mysql",
});

// console.log("sequelize: %", sequelize);

const payment = sequelize.define(
  "payment",
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    miner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tx: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(20, 12),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

const miner_wallet = sequelize.define(
  "miner_wallet",
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    miner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL(30, 12),
      allowNull: false,
    },
    paid: {
      type: DataTypes.DECIMAL(30, 12),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

const block = sequelize.define(
  "block",
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    height: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "x",
    },
    worker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tx: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    reward: {
      type: DataTypes.DECIMAL(50, 12),
      allowNull: false,
    },
    commission: {
      type: DataTypes.DECIMAL(50, 12),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    difficulty: {
      type: DataTypes.DECIMAL(30, 4),
      allowNull: false,
      defaultValue: 1,
    },
    share: {
      type: DataTypes.JSON,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

exports.payment = payment;
exports.miner_wallet = miner_wallet;
exports.block = block;
exports.sequelize = sequelize;
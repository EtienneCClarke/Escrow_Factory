const Escrow_Factory = artifacts.require('Escrow_Factory.sol');

module.exports = function (deployer) {
    deployer.deploy(Escrow_Factory);
}
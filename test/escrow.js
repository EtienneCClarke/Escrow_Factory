const { assert } = require("console");
const { emit } = require("process");

const Escrow_Factory = artifacts.require('Escrow_Factory.sol');

contract('Escrow_Factory', () => {

    it('Create contract', async () => {

        const _factory = await Escrow_Factory.new();

        await _factory.newEscrow(1,'0x30c28257b54af44a0b836ec91fdf4a72e8c9d7f3','0x3a9831a46485358ac9afd60036d315bf62bd9f69');

        console.log('new contract created');

    });

    it('Check ID exists', async () => {

        const _factory = await Escrow_Factory.new();

        await _factory.newEscrow(1,'0x30c28257b54af44a0b836ec91fdf4a72e8c9d7f3','0x3a9831a46485358ac9afd60036d315bf62bd9f69');

        const test = await _factory.exists(1);
        const test2 = await _factory.exists(234);

        console.log(test + ' | ' + test2);

    });

    it('Gets time difference', async () => {

        const _factory = await Escrow_Factory.new();

        await _factory.newEscrow(1,'0x30c28257b54af44a0b836ec91fdf4a72e8c9d7f3','0x3a9831a46485358ac9afd60036d315bf62bd9f69');

        const result = await _factory.timeDiff(1);

        console.log(result);

    });

    
});
const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
const fs = require('fs');

describe('bitmap header', () => {
    let buffer = null;

    beforeEach(done => {
        fs.readFile('./test/test-bitmap.bmp', (err, data) => {
            buffer = data;
            done();
        });
    });

    it('has correct specs', () => {
    // TODO: read the wiki spec docs to figure out what these values should be.
    // You don't need to change this test, you need to put the correct values into
    // '../lib/bitmap-constants'
        expect(constants.PIXEL_OFFSET).toEqual(10);
        expect(constants.BITS_PER_PIXEL_OFFSET).toEqual(28);
        expect(constants.FILE_SIZE_OFFSET).toEqual(2);
    });

    it('parses header data', () => {
    // TODO: use the constants to populate the following properties
    // on the BitmapHeader in its constructor.
    // These test values are correct for the supplied test-bitmap.bmp
        const header = new BitmapHeader(buffer);
        expect(header.pixelOffset).toEqual(54);
        expect(header.bitsPerPixel).toEqual(24);
        expect(header.fileSize).toEqual(30054);
    });
});
const errorHandler = require('../../src/utils/errorHandler');

describe('Error Handler Middleware Tests', () => {
    it('should handle server errors', () => {
        const err = new Error('Test error');
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        errorHandler(err, null, res, null);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Server Error');
    });
});

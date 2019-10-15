
const bookingDQL = require('./bookingsDQL');


describe('Bookings DQL', () =>{
    it('Should test my process.env.DB_ENV get set to testing',() =>{
        expect(process.env.DB_ENV).toBe('testing');
    });

    it('Should return all bookings for specific userID based on seeding file', async () =>{
        const bookings = await bookingDQL.getAllByUserId(2);
        expect(bookings.length).toBe(1);
    });
})
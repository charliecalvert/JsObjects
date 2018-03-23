describe('Test overview', () => {
   it('tests if tests are working', function() {
       expect(true).toEqual(true);
   });

    it('should have useless snapshot', () => {
        const a = () => { return 0; };

        expect(a).toMatchSnapshot();
    });

});
/**
 * Created by charlie on 5/7/17.
 *
 * Initialize it like this:
 *
 *   import ElfDebugEnzyme from '../ElfDebugEnzyme';
 *   const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Foo.test.js');
 *
 * And then use it in a test:
 *
 *   elfDebugEnzyme.getIndex(wrapper, 'div#addressShow', 3, false);
 *
 * If you pass in true to the constructor then you always see the output from this code.
 * If you pass false to the constructor, but true to one of the individual methods, then
 * you see the output from only that method. For instance, the true in the call to getLast
 * overrides the false in the constructor:
 *
 *   const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');
 *
 *   it('renders and reads H1 text', () => {
 *      const wrapper = shallow(<App />);
 *      const welcome = <h1>Waiting</h1>;
 *      elfDebugEnzyme.getLast(wrapper, 'h1', true);
 *      expect(wrapper.contains(welcome)).toEqual(true);
 *   });
 *
 */

export default class ElfDebugEnzyme {
    /**
     * @param showData: Whether or not to display output
     *
     * @param callerName: Pass in the name of the class that is
     * using this debug tool. That way, each message written to
     * the console includes the name of the class that is
     * requesting to see the output.
     */
    constructor(showData = false, callerName = '') {
        this.showData = showData;
        this.callerName = callerName + ':\n';
    }

    display(value) {
        console.log(this.callerName + value);
    }

    getAll(wrapper, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.debug();
            this.display(paragraphData);
        }
    }

    getAllDive(wrapper, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.dive().debug();
            this.display(paragraphData);
        }
    }

    getElement(wrapper, element, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.find(element).debug();
            this.display(paragraphData);
        }
    }

    getFirst(wrapper, element, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper
                .find(element)
                .first()
                .debug();
            this.display(paragraphData);
        }
    }

    getIndex(wrapper, element, index, showMe) {
        if (this.showData || showMe) {
            var paragraphData = wrapper
                .find(element)
                .childAt(index)
                .debug();
            this.display(paragraphData);
        }
    }

    getLast(wrapper, element, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper
                .find(element)
                .last()
                .debug();
            this.display(this.callerName + paragraphData);
        }
    }
}

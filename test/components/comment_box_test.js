import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has correct class', () => {        
        expect(component).to.have.class('comment-box');
    });
    
    it('has text area', () => {        
        expect(component.find('textarea')).to.exist;
    });

    it('has button', () => {        
        expect(component.find('button')).to.exist;
    });

    describe('entering text', () => {

        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows text entered', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('on submit, clears input',() => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });   
});
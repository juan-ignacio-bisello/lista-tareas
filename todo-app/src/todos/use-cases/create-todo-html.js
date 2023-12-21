import { Todo } from "../models/todo.model";
/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = ( todo ) => {

    if( !todo ) throw new Error('object Todo is required');

    const { done, description, id } = todo;

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" checked class="${ done ? 'checked' : ''}" data-id="abc">
            <label>${ description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id );

    if( done )
        liElement.classList.add('completed');

    return liElement;
}
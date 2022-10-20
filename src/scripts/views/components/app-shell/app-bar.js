import { html, css, LitElement } from 'lit';

export class AppBar extends LitElement {
    static styles = css`
        p {
            font-family: 'Quicksand', sans-serif;
            font-size: 15px;
        }
    `;

    static properties = {
        name: {
            type: String,
        }
    }

    constructor() {
        super();
        this.name = 'Warteji';
    }

    render() {
        return html`
            <p>${this.name}</p>
        `;
    }
}

customElements.define('app-bar', AppBar);

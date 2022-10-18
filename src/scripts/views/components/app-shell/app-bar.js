import { html, css, LitElement } from 'lit';

export class AppBar extends LitElement {
    static styles = css`
        p {
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            font-weight: bold;
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

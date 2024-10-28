import { LitElement, html, css} from 'lit';
import { pages } from 'build-time-data';
import 'qwc/qwc-extension-link.js';

const NAME = "Playwright";
export class QwcPlaywrightCard extends LitElement {

    static styles = css`
      .identity {
        display: flex;
        justify-content: flex-start;
      }

      .description {
        padding-bottom: 10px;
      }

      .logo {
        padding-bottom: 10px;
        margin-right: 5px;
      }

      .card-content {
        color: var(--lumo-contrast-90pct);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 2px 2px;
        height: 100%;
      }

      .card-content slot {
        display: flex;
        flex-flow: column wrap;
        padding-top: 5px;
      }
    `;

    static properties = {
        description: {type: String}
    };

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`<div class="card-content" slot="content">
            <div class="identity">
                <div class="logo">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTM2LjQ0NCAyMjEuNTU2QzEyMy41NTggMjI1LjIxMyAxMTUuMTA0IDIzMS42MjUgMTA5LjUzNSAyMzguMDMyQzExNC44NjkgMjMzLjM2NCAxMjIuMDE0IDIyOS4wOCAxMzEuNjUyIDIyNi4zNDhDMTQxLjUxIDIyMy41NTQgMTQ5LjkyIDIyMy41NzQgMTU2Ljg2OSAyMjQuOTE1VjIxOS40ODFDMTUwLjk0MSAyMTguOTM5IDE0NC4xNDUgMjE5LjM3MSAxMzYuNDQ0IDIyMS41NTZaTTEwOC45NDYgMTc1Ljg3Nkw2MS4wODk1IDE4OC40ODRDNjEuMDg5NSAxODguNDg0IDYxLjk2MTcgMTg5LjcxNiA2My41NzY3IDE5MS4zNkwxMDQuMTUzIDE4MC42NjhDMTA0LjE1MyAxODAuNjY4IDEwMy41NzggMTg4LjA3NyA5OC41ODQ3IDE5NC43MDVDMTA4LjAzIDE4Ny41NTkgMTA4Ljk0NiAxNzUuODc2IDEwOC45NDYgMTc1Ljg3NlpNMTQ5LjAwNSAyODguMzQ3QzgxLjY1ODIgMzA2LjQ4NiA0Ni4wMjcyIDIyOC40MzggMzUuMjM5NiAxODcuOTI4QzMwLjI1NTYgMTY5LjIyOSAyOC4wNzk5IDE1NS4wNjcgMjcuNSAxNDUuOTI4QzI3LjQzNzcgMTQ0Ljk3OSAyNy40NjY1IDE0NC4xNzkgMjcuNTMzNiAxNDMuNDQ2QzI0LjA0IDE0My42NTcgMjIuMzY3NCAxNDUuNDczIDIyLjcwNzcgMTUwLjcyMUMyMy4yODc2IDE1OS44NTUgMjUuNDYzMyAxNzQuMDE2IDMwLjQ0NzMgMTkyLjcyMUM0MS4yMzAxIDIzMy4yMjUgNzYuODY1OSAzMTEuMjczIDE0NC4yMTMgMjkzLjEzNEMxNTguODcyIDI4OS4xODUgMTY5Ljg4NSAyODEuOTkyIDE3OC4xNTIgMjcyLjgxQzE3MC41MzIgMjc5LjY5MiAxNjAuOTk1IDI4NS4xMTIgMTQ5LjAwNSAyODguMzQ3Wk0xNjEuNjYxIDEyOC4xMVYxMzIuOTAzSDE4OC4wNzdDMTg3LjUzNSAxMzEuMjA2IDE4Ni45ODkgMTI5LjY3NyAxODYuNDQ3IDEyOC4xMUgxNjEuNjYxWiIgZmlsbD0iIzJENDU1MiIvPg0KPHBhdGggZD0iTTE5My45ODEgMTY3LjU4NEMyMDUuODYxIDE3MC45NTggMjEyLjE0NCAxNzkuMjg3IDIxNS40NjUgMTg2LjY1OEwyMjguNzExIDE5MC40MkMyMjguNzExIDE5MC40MiAyMjYuOTA0IDE2NC42MjMgMjAzLjU3IDE1Ny45OTVDMTgxLjc0MSAxNTEuNzkzIDE2OC4zMDggMTcwLjEyNCAxNjYuNjc0IDE3Mi40OTZDMTczLjAyNCAxNjcuOTcyIDE4Mi4yOTcgMTY0LjI2OCAxOTMuOTgxIDE2Ny41ODRaTTI5OS40MjIgMTg2Ljc3N0MyNzcuNTczIDE4MC41NDcgMjY0LjE0NSAxOTguOTE2IDI2Mi41MzUgMjAxLjI1NUMyNjguODkgMTk2LjczNiAyNzguMTU4IDE5My4wMzEgMjg5LjgzNyAxOTYuMzYyQzMwMS42OTggMTk5Ljc0MSAzMDcuOTc2IDIwOC4wNiAzMTEuMzA3IDIxNS40MzZMMzI0LjU3MiAyMTkuMjEyQzMyNC41NzIgMjE5LjIxMiAzMjIuNzM2IDE5My40MSAyOTkuNDIyIDE4Ni43NzdaTTI4Ni4yNjIgMjU0Ljc5NUwxNzYuMDcyIDIyMy45OUMxNzYuMDcyIDIyMy45OSAxNzcuMjY1IDIzMC4wMzggMTgxLjg0MiAyMzcuODY5TDI3NC42MTcgMjYzLjgwNUMyODIuMjU1IDI1OS4zODYgMjg2LjI2MiAyNTQuNzk1IDI4Ni4yNjIgMjU0Ljc5NVpNMjA5Ljg2NyAzMjEuMTAyQzEyMi42MTggMjk3LjcxIDEzMy4xNjYgMTg2LjU0MyAxNDcuMjg0IDEzMy44NjVDMTUzLjA5NyAxMTIuMTU2IDE1OS4wNzMgOTYuMDIwMyAxNjQuMDI5IDg1LjIwNEMxNjEuMDcyIDg0LjU5NTMgMTU4LjYyMyA4Ni4xNTI5IDE1Ni4yMDMgOTEuMDc0NkMxNTAuOTQxIDEwMS43NDcgMTQ0LjIxMiAxMTkuMTI0IDEzNy43IDE0My40NUMxMjMuNTg2IDE5Ni4xMjcgMTEzLjAzOCAzMDcuMjkgMjAwLjI4MyAzMzAuNjgyQzI0MS40MDYgMzQxLjY5OSAyNzMuNDQyIDMyNC45NTUgMjk3LjMyMyAyOTguNjU5QzI3NC42NTUgMzE5LjE5IDI0NS43MTQgMzMwLjcwMSAyMDkuODY3IDMyMS4xMDJaIiBmaWxsPSIjMkQ0NTUyIi8+DQo8cGF0aCBkPSJNMTYxLjY2MSAyNjIuMjk2VjIzOS44NjNMOTkuMzMyNCAyNTcuNTM3Qzk5LjMzMjQgMjU3LjUzNyAxMDMuOTM4IDIzMC43NzcgMTM2LjQ0NCAyMjEuNTU2QzE0Ni4zMDIgMjE4Ljc2MiAxNTQuNzEzIDIxOC43ODEgMTYxLjY2MSAyMjAuMTIzVjEyOC4xMUgxOTIuODY5QzE4OS40NzEgMTE3LjYxIDE4Ni4xODQgMTA5LjUyNiAxODMuNDIzIDEwMy45MDlDMTc4Ljg1NiA5NC42MTIgMTc0LjE3NCAxMDAuNzc1IDE2My41NDUgMTA5LjY2NUMxNTYuMDU5IDExNS45MTkgMTM3LjEzOSAxMjkuMjYxIDEwOC42NjggMTM2LjkzM0M4MC4xOTY2IDE0NC42MSA1Ny4xNzkgMTQyLjU3NCA0Ny41NzUyIDE0MC45MTFDMzMuOTYwMSAxMzguNTYyIDI2LjgzODcgMTM1LjU3MiAyNy41MDQ5IDE0NS45MjhDMjguMDg0NyAxNTUuMDYyIDMwLjI2MDUgMTY5LjIyNCAzNS4yNDQ1IDE4Ny45MjhDNDYuMDI3MiAyMjguNDMzIDgxLjY2MyAzMDYuNDgxIDE0OS4wMSAyODguMzQyQzE2Ni42MDIgMjgzLjYwMiAxNzkuMDE5IDI3NC4yMzMgMTg3LjYyNiAyNjIuMjkxSDE2MS42NjFWMjYyLjI5NlpNNjEuMDg0OCAxODguNDg0TDEwOC45NDYgMTc1Ljg3NkMxMDguOTQ2IDE3NS44NzYgMTA3LjU1MSAxOTQuMjg4IDg5LjYwODcgMTk5LjAxOEM3MS42NjE0IDIwMy43NDMgNjEuMDg0OCAxODguNDg0IDYxLjA4NDggMTg4LjQ4NFoiIGZpbGw9IiNFMjU3NEMiLz4NCjxwYXRoIGQ9Ik0zNDEuNzg2IDEyOS4xNzRDMzI5LjM0NSAxMzEuMzU1IDI5OS40OTggMTM0LjA3MiAyNjIuNjEyIDEyNC4xODVDMjI1LjcxNiAxMTQuMzA0IDIwMS4yMzYgOTcuMDIyNCAxOTEuNTM3IDg4Ljg5OTRDMTc3Ljc4OCA3Ny4zODM0IDE3MS43NCA2OS4zODAyIDE2NS43ODggODEuNDg1N0MxNjAuNTI2IDkyLjE2MyAxNTMuNzk3IDEwOS41NCAxNDcuMjg0IDEzMy44NjZDMTMzLjE3MSAxODYuNTQzIDEyMi42MjMgMjk3LjcwNiAyMDkuODY3IDMyMS4wOThDMjk3LjA5MyAzNDQuNDcgMzQzLjUzIDI0Mi45MiAzNTcuNjQ0IDE5MC4yMzhDMzY0LjE1NyAxNjUuOTE3IDM2Ny4wMTMgMTQ3LjUgMzY3Ljc5OSAxMzUuNjI1QzM2OC42OTUgMTIyLjE3MyAzNTkuNDU1IDEyNi4wNzggMzQxLjc4NiAxMjkuMTc0Wk0xNjYuNDk3IDE3Mi43NTZDMTY2LjQ5NyAxNzIuNzU2IDE4MC4yNDYgMTUxLjM3MiAyMDMuNTY1IDE1OEMyMjYuODk5IDE2NC42MjggMjI4LjcwNiAxOTAuNDI1IDIyOC43MDYgMTkwLjQyNUwxNjYuNDk3IDE3Mi43NTZaTTIyMy40MiAyNjguNzEzQzE4Mi40MDMgMjU2LjY5OCAxNzYuMDc3IDIyMy45OSAxNzYuMDc3IDIyMy45OUwyODYuMjYyIDI1NC43OTZDMjg2LjI2MiAyNTQuNzkxIDI2NC4wMjEgMjgwLjU3OCAyMjMuNDIgMjY4LjcxM1pNMjYyLjM3NyAyMDEuNDk1QzI2Mi4zNzcgMjAxLjQ5NSAyNzYuMTA3IDE4MC4xMjYgMjk5LjQyMiAxODYuNzczQzMyMi43MzYgMTkzLjQxMSAzMjQuNTcyIDIxOS4yMDggMzI0LjU3MiAyMTkuMjA4TDI2Mi4zNzcgMjAxLjQ5NVoiIGZpbGw9IiMyRUFEMzMiLz4NCjxwYXRoIGQ9Ik0xMzkuODggMjQ2LjA0TDk5LjMzMjQgMjU3LjUzMkM5OS4zMzI0IDI1Ny41MzIgMTAzLjczNyAyMzIuNDQgMTMzLjYwNyAyMjIuNDk2TDExMC42NDcgMTM2LjMzTDEwOC42NjMgMTM2LjkzM0M4MC4xOTE4IDE0NC42MTEgNTcuMTc0MiAxNDIuNTc0IDQ3LjU3MDQgMTQwLjkxMUMzMy45NTU0IDEzOC41NjMgMjYuODM0IDEzNS41NzIgMjcuNTAwMSAxNDUuOTI5QzI4LjA4IDE1NS4wNjMgMzAuMjU1NyAxNjkuMjI0IDM1LjIzOTcgMTg3LjkyOUM0Ni4wMjI1IDIyOC40MzMgODEuNjU4MyAzMDYuNDgxIDE0OS4wMDUgMjg4LjM0MkwxNTAuOTg5IDI4Ny43MTlMMTM5Ljg4IDI0Ni4wNFpNNjEuMDg0OCAxODguNDg1TDEwOC45NDYgMTc1Ljg3NkMxMDguOTQ2IDE3NS44NzYgMTA3LjU1MSAxOTQuMjg4IDg5LjYwODcgMTk5LjAxOEM3MS42NjE1IDIwMy43NDMgNjEuMDg0OCAxODguNDg1IDYxLjA4NDggMTg4LjQ4NVoiIGZpbGw9IiNENjUzNDgiLz4NCjxwYXRoIGQ9Ik0yMjUuMjcgMjY5LjE2M0wyMjMuNDE1IDI2OC43MTJDMTgyLjM5OCAyNTYuNjk4IDE3Ni4wNzIgMjIzLjk5IDE3Ni4wNzIgMjIzLjk5TDIzMi44OSAyMzkuODcyTDI2Mi45NzEgMTI0LjI4MUwyNjIuNjA3IDEyNC4xODVDMjI1LjcxMSAxMTQuMzA0IDIwMS4yMzIgOTcuMDIyNCAxOTEuNTMyIDg4Ljg5OTRDMTc3Ljc4MyA3Ny4zODM0IDE3MS43MzUgNjkuMzgwMiAxNjUuNzgzIDgxLjQ4NTdDMTYwLjUyNiA5Mi4xNjMgMTUzLjc5NyAxMDkuNTQgMTQ3LjI4NCAxMzMuODY2QzEzMy4xNzEgMTg2LjU0MyAxMjIuNjIzIDI5Ny43MDYgMjA5Ljg2NyAzMjEuMDk3TDIxMS42NTUgMzIxLjVMMjI1LjI3IDI2OS4xNjNaTTE2Ni40OTcgMTcyLjc1NkMxNjYuNDk3IDE3Mi43NTYgMTgwLjI0NiAxNTEuMzcyIDIwMy41NjUgMTU4QzIyNi44OTkgMTY0LjYyOCAyMjguNzA2IDE5MC40MjUgMjI4LjcwNiAxOTAuNDI1TDE2Ni40OTcgMTcyLjc1NloiIGZpbGw9IiMxRDhEMjIiLz4NCjxwYXRoIGQ9Ik0xNDEuOTQ2IDI0NS40NTFMMTMxLjA3MiAyNDguNTM3QzEzMy42NDEgMjYzLjAxOSAxMzguMTY5IDI3Ni45MTcgMTQ1LjI3NiAyODkuMTk1QzE0Ni41MTMgMjg4LjkyMiAxNDcuNzQgMjg4LjY4NyAxNDkgMjg4LjM0MkMxNTIuMzAyIDI4Ny40NTEgMTU1LjM2NCAyODYuMzQ4IDE1OC4zMTIgMjg1LjE0NUMxNTAuMzcxIDI3My4zNjEgMTQ1LjExOCAyNTkuNzg5IDE0MS45NDYgMjQ1LjQ1MVpNMTM3LjcgMTQzLjQ1MUMxMzIuMTEyIDE2NC4zMDcgMTI3LjExMyAxOTQuMzI2IDEyOC40ODkgMjI0LjQzNkMxMzAuOTUyIDIyMy4zNjcgMTMzLjU1NCAyMjIuMzcxIDEzNi40NDQgMjIxLjU1MUwxMzguNDU3IDIyMS4xMDFDMTM2LjAwMyAxODguOTM5IDE0MS4zMDggMTU2LjE2NSAxNDcuMjg0IDEzMy44NjZDMTQ4Ljc5OSAxMjguMjI1IDE1MC4zMTggMTIyLjk3OCAxNTEuODMyIDExOC4wODVDMTQ5LjM5MyAxMTkuNjM3IDE0Ni43NjcgMTIxLjIyOCAxNDMuNzc2IDEyMi44NjdDMTQxLjc1OSAxMjkuMDkzIDEzOS43MjIgMTM1Ljg5OCAxMzcuNyAxNDMuNDUxWiIgZmlsbD0iI0MwNEI0MSIvPg0KPC9zdmc+DQo="
                                       alt="${NAME}" 
                                       title="${NAME}"
                                       width="32" 
                                       height="32">
                </div>
                <div class="description">${this.description}</div>
            </div>
            ${this._renderCardLinks()}
        </div>
        `;
    }

    _renderCardLinks(){
        return html`${pages.map(page => html`
                            <qwc-extension-link slot="link"
                                extensionName="${NAME}"
                                iconName="${page.icon}"
                                displayName="${page.title}"
                                staticLabel="${page.staticLabel}"
                                dynamicLabel="${page.dynamicLabel}"
                                streamingLabel="${page.streamingLabel}"
                                path="${page.id}"
                                ?embed=${page.embed}
                                externalUrl="${page.metadata.externalUrl}"
                                webcomponent="${page.componentLink}" >
                            </qwc-extension-link>
                        `)}`;
    }

}
customElements.define('qwc-playwright-card', QwcPlaywrightCard);
export class Widget {
  constructor({ token }) {
    this.token = token
    this.initialise();
    this.createStyles();
  }

  initialise() {
    this.widget = document.createElement('div');
    this.widget.classList.add('rd-widget');

    this.widgetFrame = document.createElement('iframe');
    this.widgetFrame.src = `http://localhost:8080/authx/widget/${this.token}`;

    this.widgetClose = document.createElement('span');
    this.widgetClose.classList.add('rd-widget-close')
    this.widgetClose.innerHTML = `
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    `;

    this.widget.appendChild(this.widgetClose);
    this.widget.appendChild(this.widgetFrame);
    document.body.appendChild(this.widget)

    document.querySelector('.rd-widget-close').addEventListener('click', () => {
      this.widget.remove()
      document.body.style.overflow = 'visible';
    })

    setTimeout(() => {
      document.querySelector('.rd-widget').classList.add('rd-widget-open');
      document.body.style.overflow = 'hidden';
    }, 200);
  }

  createStyles() {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
            .rd-widget {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 9999;
              background: #EEF0F5;
              height: 100vh;
              width: 100%;
              opacity: 0;
            }

            .rd-widget-open {
              opacity: 1;
              transition: opacity 1s ease-in;
            }

            .rd-widget-close {
              position: absolute;
              top: 20px;
              right: 20px;
              height: 40px;
              width: 40px;
              border-radius: 1000px;
              display: flex;
              justify-content: center;
              align-items: center;
              background: rgba(0, 0, 0, 0.1);
              cursor: pointer;
            }

            .rd-widget iframe {
              border: none;
              height: 100vh;
              width: 100vw;
            }
        `.replace(/^\s+|\n/gm, '');
    document.head.appendChild(styleTag);
  }
}

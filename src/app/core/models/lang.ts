export class Lang {
  static changeDirection(dir: string) {
    const ltrStyle = document.getElementById('ltrStyle');
    const rtlStyle = document.getElementById('rtlStyle');
    if (rtlStyle) {
      rtlStyle.remove();
    }
    if (ltrStyle) {
      ltrStyle.remove();
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    if (dir === 'rtl') {
      link.href = 'assets/css/rtl.css';
      link.id = 'rtlStyle';
    } else {
      link.href = 'assets/css/ltr.css';
      link.id = 'ltrStyle';
    }
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
  }
}

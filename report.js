function license() {
    const wrap = document.querySelector('[data-license="wrapper"]');
    if (!wrap) return;
    const list = wrap.querySelector('[data-license="list"]');
    const [individualCard, teamCard] = list.children;
    const individualText = wrap.querySelector('[data-license="individual"]');
    const teamText = wrap.querySelector('[data-license="team"]');
  
    if (individualCard && individualText)
      individualCard.appendChild(individualText);
    if (teamCard && teamText) teamCard.appendChild(teamText);
  }
  
  license();  
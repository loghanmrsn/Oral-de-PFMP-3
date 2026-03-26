    const centerLine = document.getElementById("center-line");
    const enterBtn = document.getElementById("enterBtn");
const steps = [
  "Rapport de PFMP",
  "Stage chez Korum Group",
  "1re CIEL - Lycee Louise Michel",
  "Decouvre mon rapport"
];

    function wait(ms){
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function typeWriter(el, text, speed = 30){
      el.innerHTML = "";
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.textContent = "|";
      el.appendChild(document.createTextNode(""));

      let current = "";
      for (let i = 0; i < text.length; i++){
        current += text[i];
        el.childNodes[0].textContent = current;
        await wait(speed);
      }

      el.appendChild(cursor);
      await wait(250);
      cursor.remove();
    }

async function runIntro(){
  if (enterBtn){
    enterBtn.classList.remove("show");
  }
  centerLine.classList.add("show");
  centerLine.classList.remove("exit");

      for (let i = 0; i < steps.length; i++){
        centerLine.classList.remove("exit");
        centerLine.classList.add("show");
        await typeWriter(centerLine, steps[i], 30);
        await wait(600);

        if (i < steps.length - 1){
          centerLine.classList.add("exit");
          await wait(420);
        }
  }

  centerLine.classList.remove("exit");
  centerLine.classList.add("show");
  if (enterBtn){
    enterBtn.classList.add("show");
  }
}

    runIntro();

    const activitiesFolder = document.getElementById("activitiesFolder");
    const entrepriseFolder = document.getElementById("entrepriseFolder");
    const etudeFolder = document.getElementById("etudeFolder");
    const annexesFolder = document.getElementById("annexesFolder");
    const entrepriseSource = document.getElementById("entreprise-source");
    const annexesSource = document.getElementById("annexes-source");
    const activitySource1 = document.getElementById("activity-source-1");
    const activitySource2 = document.getElementById("activity-source-2");
    const activitySource3 = document.getElementById("activity-source-3");
    const caseSource1 = document.getElementById("case-source-1");
    const depthOverlay = document.getElementById("depthOverlay");
    const depthBackdrop = document.getElementById("depthBackdrop");
    const depthBackBtn = document.getElementById("depthBackBtn");
    const depthListView = document.getElementById("depthListView");
    const depthListTitle = document.getElementById("depthListTitle");
    const depthListGrid = document.getElementById("depthListGrid");
    const depthActivityView = document.getElementById("depthActivityView");
    const depthActivityTitle = document.getElementById("depthActivityTitle");
    const depthCounter = document.getElementById("depthCounter");
    const depthActivityBody = document.getElementById("depthActivityBody");
    const prevActivityBtn = document.getElementById("prevActivityBtn");
    const nextActivityBtn = document.getElementById("nextActivityBtn");
    const imageLightbox = document.getElementById("imageLightbox");
    const imageLightboxBackdrop = document.getElementById("imageLightboxBackdrop");
    const imageLightboxClose = document.getElementById("imageLightboxClose");
    const imageLightboxImg = document.getElementById("imageLightboxImg");
    const activitiesListMarkup = depthListGrid.innerHTML;

    const activitiesData = [
      { title: "Mise en ligne de produits sur Amazon", content: activitySource1.innerHTML },
      { title: "Carte biometrique", content: activitySource2.innerHTML },
      { title: "Kasier universite Brest", content: activitySource3.innerHTML }
    ];

    const caseStudiesData = [
      { title: "DNAKE AC02C", content: caseSource1.innerHTML }
    ];

    const caseStudiesListMarkup = `
      <button class="activity-btn case-study-card" type="button" data-case-index="0">
        <div class="case-study-layout">
          <div class="activity-frame case-study-frame" aria-hidden="true">
            <div class="frame-stack">
              <div class="frame-card">
                <div class="frame-image activity-photo-filled">
                  <img src="pictures/DNAKE AC02C.png" alt="DNAKE AC02C">
                </div>
              </div>
            </div>
          </div>
          <div class="case-study-copy">
            <h3>Etude de cas -<br>Terminal DNAKE<br>AC02C</h3>
            <p>Controle d'acces intelligent</p>
          </div>
        </div>
        <div class="case-study-arrow" aria-hidden="true">
          <span>&darr;</span>
        </div>
        <div class="case-study-product">
          <div class="case-study-product-layout">
            <div class="case-study-product-copy">
              <h4>Presentation du produit</h4>
              <p>Le DNAKE AC02C est un terminal de controle d'acces permettant de securiser l'entree d'un batiment ou d'une piece. Ce produit moderne est equipe d'un clavier tactile retroeclaire et qui dispose de plusieurs methodes d'authentification.</p>
              <h5>Fonctionnalites principales :</h5>
              <ul class="case-study-list">
                <li>Ouverture par code PIN</li>
                <li>Utilisation de badges RFID</li>
                <li>Acces via QR code</li>
                <li>Gestion a distance grace a une application mobile</li>
              </ul>
              <div class="related-documents case-study-related-documents">
                <h5>Document associe</h5>
                <div class="related-documents-grid related-documents-grid-single">
                  <a class="annex-doc annex-doc-inline" href="pictures/Doc AC02C.odt" target="_blank" rel="noreferrer" aria-label="Ouvrir la fiche AC02C">
                    <span class="annex-doc-paper"></span>
                    <span class="annex-doc-paper annex-doc-paper-two"></span>
                    <span class="annex-doc-paper annex-doc-paper-three"></span>
                    <span class="annex-doc-label">ODT</span>
                    <span class="annex-doc-icon" aria-hidden="true"></span>
                    <span class="annex-doc-name">Fiche AC02C</span>
                    <span class="annex-doc-file">Doc AC02C.odt</span>
                    <span class="annex-doc-open">Ouvrir le document</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="case-study-product-visual">
              <div class="case-study-product-shot case-study-product-shot-main">
                <img src="pictures/DNAKE-AC02C.png" alt="Terminal DNAKE AC02C">
              </div>
              <div class="case-study-product-shot-grid">
                <div class="case-study-product-shot">
                  <img src="pictures/qr-code.png" alt="QR code DNAKE AC02C">
                </div>
                <div class="case-study-product-shot">
                  <img src="pictures/DNAKE SMART PRO - APP.png" alt="Application DNAKE Smart Pro">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="case-study-arrow case-study-arrow-lower" aria-hidden="true">
          <span>&darr;</span>
        </div>
        <div class="case-study-context">
          <h4>Contexte et Problematique</h4>
          <h5>Contexte</h5>
          <p>Lors de la PFMP chez Korum Group, j'ai decouvert et utiliser un terminal DNAKE AC02C dans le cadre d'une mise en situation reelle. L'objectif etait de comprendre son fonctionnement et de pouvoir presenter le produits afin de l'inclure a la boutique.</p>
          <h5>Problematique</h5>
          <p>Comment permettre a un utilisateur ne connaissant pas le produit de :</p>
          <ul class="case-study-list">
            <li>Comprendre son fonctionnement</li>
            <li>Creer un acces temporaire</li>
            <li>Utiliser les differentes fonctionnalites du terminal</li>
            <li>Se connecter a la plateforme cloud du produit</li>
            <li>Cree une documentation du produit</li>
          </ul>
        </div>
        <div class="case-study-arrow case-study-arrow-lower" aria-hidden="true">
          <span>&darr;</span>
        </div>
        <div class="case-study-means">
          <h4>Moyens mis en oeuvre</h4>
          <p>Pour realiser cette activite, les outils et ressources utilises ont ete :</p>
          <ul class="case-study-list">
            <li>Terminal DNAKE AC02C</li>
            <li>Smartphone avec l'application DNAKE Smart Pro</li>
            <li>Codes d'acces et QR codes</li>
            <li>Environnement de test</li>
          </ul>
          <p>Ces ressources ont permis une experimentation complete du systeme dans des conditions reelles.</p>
          <div class="case-study-means-gallery">
            <div class="case-study-means-shot">
              <img src="pictures/DNAKE AC02C.png" alt="Terminal DNAKE AC02C">
            </div>
            <div class="case-study-means-shot">
              <img src="pictures/qr-code.png" alt="QR code DNAKE">
            </div>
            <div class="case-study-means-shot">
              <img src="pictures/DNAKE SMART PRO - APP.png" alt="Application DNAKE Smart Pro">
            </div>
            <div class="case-study-means-shot">
              <img src="pictures/Téléphone.avif" alt="Telephone utilise pour les tests">
            </div>
          </div>
        </div>
        <div class="case-study-arrow case-study-arrow-lower" aria-hidden="true">
          <span>&darr;</span>
        </div>
        <div class="case-study-analysis">
          <div class="case-study-analysis-layout">
            <div class="case-study-analysis-copy">
              <h4>Analyse technique</h4>
              <p>Le terminal DNAKE AC02C est simple d'utilisation mais necessite une configuration initiale via une application dediee.</p>
              <h5>Elements techniques observes :</h5>
              <ul class="case-study-list">
                <li>Clavier tactile numerique</li>
                <li>Lecteur RFID integre</li>
                <li>Connexion avec une application mobile</li>
                <li>Systeme de gestion des acces (utilisateurs, codes, QR codes)</li>
              </ul>
              <h5>Enjeu principal</h5>
              <p>La comprehension de l'interface et la gestion des acces temporaires</p>
            </div>
            <div class="case-study-analysis-visual">
              <img src="pictures/Schema-DNAKE.png" alt="Schema technique DNAKE AC02C">
            </div>
          </div>
        </div>
        <div class="case-study-arrow case-study-arrow-lower" aria-hidden="true">
          <span>&darr;</span>
        </div>
        <div class="case-study-solution">
          <h4>Solution apportee</h4>
          <p class="case-study-solution-intro">Un tutoriel complet a ete realise expliquant :</p>
          <div class="case-study-solution-list">
            <div class="case-study-solution-item">
              <div class="case-study-solution-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  <rect x="6" y="6" width="1.6" height="1.6" fill="currentColor" stroke="none"></rect>
                  <rect x="17" y="6" width="1.6" height="1.6" fill="currentColor" stroke="none"></rect>
                  <rect x="6" y="17" width="1.6" height="1.6" fill="currentColor" stroke="none"></rect>
                  <path d="M14 14h2v2h-2zM18 14h2v5h-2zM14 18h4v2h-4z"></path>
                </svg>
              </div>
              <div>
                <h5>Les differentes methodes d'acces</h5>
                <p>Code PIN, badges RFID et QR code.</p>
              </div>
            </div>
            <div class="case-study-solution-item">
              <div class="case-study-solution-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <circle cx="12" cy="5" r="2.4"></circle>
                  <path d="M12 8.5v12M8.5 12h7M9 21v-4.5a3 3 0 0 1 6 0V21M8.5 10.5l-3 3M15.5 10.5l3 3"></path>
                </svg>
              </div>
              <div>
                <h5>La creation d'un utilisateur</h5>
                <p>Un guide pas a pas pour ajouter de nouveaux utilisateurs au systeme.</p>
              </div>
            </div>
            <div class="case-study-solution-item">
              <div class="case-study-solution-icon case-study-solution-icon-number" aria-hidden="true">
                <span>01</span>
                <span>10</span>
              </div>
              <div>
                <h5>La generation d'un code temporaire</h5>
                <p>Comment creer des acces limites dans le temps pour les visiteurs.</p>
              </div>
            </div>
            <div class="case-study-solution-item">
              <div class="case-study-solution-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <rect x="7" y="2.5" width="10" height="19" rx="2"></rect>
                  <path d="M10 5h4M10.8 18.2h2.4"></path>
                </svg>
              </div>
              <div>
                <h5>L'utilisation de l'application mobile DNAKE Smart Pro</h5>
                <p>Une demonstration des fonctionnalites de gestion a distance.</p>
              </div>
            </div>
          </div>
          <p class="case-study-solution-outro">Ce tutoriel permet aux utilisateurs de prendre en main le produit facilement et de comprendre chaque etape du processus.</p>
          <div class="related-documents case-study-related-documents">
            <h5>Document associe</h5>
            <div class="related-documents-grid related-documents-grid-single">
              <a class="annex-doc annex-doc-inline" href="pictures/Dnake tuto.odt" target="_blank" rel="noreferrer" aria-label="Ouvrir le tutoriel DNAKE">
                <span class="annex-doc-paper"></span>
                <span class="annex-doc-paper annex-doc-paper-two"></span>
                <span class="annex-doc-paper annex-doc-paper-three"></span>
                <span class="annex-doc-label">ODT</span>
                <span class="annex-doc-icon" aria-hidden="true"></span>
                <span class="annex-doc-name">Tutoriel DNAKE</span>
                <span class="annex-doc-file">Dnake tuto.odt</span>
                <span class="annex-doc-open">Ouvrir le document</span>
              </a>
            </div>
          </div>
        </div>
        <div class="case-study-arrow case-study-arrow-lower" aria-hidden="true">
          <span>&darr;</span>
        </div>
        <div class="case-study-results">
          <img class="case-study-results-image" src="pictures/résultat-obtenus.png" alt="Resultats obtenus">
          <div class="case-study-results-head">
            <span class="case-study-results-line" aria-hidden="true"></span>
            <h4>Resultats obtenus</h4>
            <span class="case-study-results-line" aria-hidden="true"></span>
          </div>
          <div class="case-study-results-grid">
            <div class="case-study-results-col">
              <div class="case-study-results-visual case-study-results-visual-folder" aria-hidden="true">
                <span class="case-study-results-folder-back"></span>
                <span class="case-study-results-folder-front"></span>
                <span class="case-study-results-folder-paper paper-one"></span>
                <span class="case-study-results-folder-paper paper-two"></span>
                <span class="case-study-results-folder-paper paper-three"></span>
              </div>
              <h5>Le guide cree permet :</h5>
              <ul class="case-study-list">
                <li>Une meilleure comprehension du produit</li>
                <li>Une utilisation simplifiee pour les clients</li>
              </ul>
              <p class="case-study-results-highlight"><span class="case-study-results-check" aria-hidden="true">✓</span>Une mise en place rapide du systeme</p>
            </div>
            <div class="case-study-results-col">
              <div class="case-study-results-visual case-study-results-visual-checklist" aria-hidden="true">
                <div class="case-study-results-clipboard">
                  <span class="clip-top"></span>
                  <span class="line one"></span>
                  <span class="line two"></span>
                  <span class="line three"></span>
                  <span class="check one"></span>
                  <span class="check two"></span>
                  <span class="check three"></span>
                </div>
                <div class="case-study-results-phone">
                  <span class="phone-screen"></span>
                </div>
              </div>
              <h5>Les utilisateurs peuvent maintenant :</h5>
              <ul class="case-study-list">
                <li>Configurer le terminal en autonomie</li>
                <li>Gerer les acces temporaires efficacement</li>
                <li>Utiliser toutes les fonctionnalites disponibles</li>
              </ul>
            </div>
          </div>
        </div>
      </button>
    `;

    let currentActivityIndex = 0;
    let currentCollection = "activities";
    let savedScrollY = 0;
    let activeFolderTrigger = activitiesFolder;

    function isDepthOpen(){
      return depthOverlay.classList.contains("open");
    }

    function showDepthList(title = "Les activite en entreprise", markup = activitiesListMarkup, collection = "activities"){
      currentCollection = collection;
      depthListTitle.textContent = title;
      depthListGrid.innerHTML = markup;
      depthListView.hidden = false;
      depthActivityView.hidden = true;
      prevActivityBtn.style.display = "";
      nextActivityBtn.style.display = "";
    }

    function openDepthFolder(triggerElement = activitiesFolder, onOpen = showDepthList){
      if (isDepthOpen()) return;
      savedScrollY = window.scrollY || window.pageYOffset || 0;
      activeFolderTrigger = triggerElement || activitiesFolder;
      activeFolderTrigger.classList.add("folder-active");

      setTimeout(() => {
        depthOverlay.classList.add("open");
        depthOverlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("depth-open", "lock-scroll");
        document.documentElement.classList.add("lock-scroll");
        document.body.style.position = "fixed";
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        onOpen();
      }, 120);
    }

    function closeDepthFolder(){
      if (!isDepthOpen()) return;
      depthOverlay.classList.remove("open");
      depthOverlay.setAttribute("aria-hidden", "true");
      depthActivityView.hidden = true;
      depthListView.hidden = false;
      prevActivityBtn.style.display = "";
      nextActivityBtn.style.display = "";
      document.body.classList.remove("depth-open", "lock-scroll");
      document.documentElement.classList.remove("lock-scroll");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      if (activeFolderTrigger){
        activeFolderTrigger.classList.remove("folder-active");
      }

      window.scrollTo(0, savedScrollY);
    }

    function showActivity(index){
      const sourceData = currentCollection === "cases" ? caseStudiesData : activitiesData;
      const safeIndex = Math.max(0, Math.min(sourceData.length - 1, index));
      const activity = sourceData[safeIndex];

      currentActivityIndex = safeIndex;
      depthListView.hidden = true;
      depthActivityView.hidden = false;
      depthActivityTitle.textContent = activity.title;
      depthCounter.textContent = `${safeIndex + 1} / ${sourceData.length}`;
      depthActivityBody.innerHTML = activity.content;
      prevActivityBtn.disabled = safeIndex === 0;
      nextActivityBtn.disabled = safeIndex === sourceData.length - 1;
      prevActivityBtn.style.display = "";
      nextActivityBtn.style.display = "";
    }

    function openImageLightbox(src, alt){
      if (!src) return;
      imageLightboxImg.src = src;
      imageLightboxImg.alt = alt || "";
      imageLightbox.classList.add("open");
      imageLightbox.setAttribute("aria-hidden", "false");
    }

    function closeImageLightbox(){
      imageLightbox.classList.remove("open");
      imageLightbox.setAttribute("aria-hidden", "true");
      imageLightboxImg.src = "";
      imageLightboxImg.alt = "";
    }

    function bindFolderOpen(element, handler){
      element.addEventListener("click", handler);
      element.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " "){
          event.preventDefault();
          handler();
        }
      });
    }

    bindFolderOpen(activitiesFolder, () => openDepthFolder(activitiesFolder, showDepthList));

    bindFolderOpen(entrepriseFolder, () => {
      openDepthFolder(entrepriseFolder, () => {
        depthListView.hidden = true;
        depthActivityView.hidden = false;
        depthActivityTitle.textContent = "Presentation de l'entreprise";
        depthCounter.textContent = "Entreprise";
        depthActivityBody.innerHTML = entrepriseSource.innerHTML;
        prevActivityBtn.style.display = "none";
        nextActivityBtn.style.display = "none";
      });
    });

    bindFolderOpen(etudeFolder, () => {
      openDepthFolder(etudeFolder, () => {
        showDepthList("Etude de cas", caseStudiesListMarkup, "cases");
      });
    });

    bindFolderOpen(annexesFolder, () => {
      openDepthFolder(annexesFolder, () => {
        depthListView.hidden = true;
        depthActivityView.hidden = false;
        depthActivityTitle.textContent = "Annexes";
        depthCounter.textContent = "Annexes";
        depthActivityBody.innerHTML = annexesSource.innerHTML;
        prevActivityBtn.style.display = "none";
        nextActivityBtn.style.display = "none";
      });
    });

    depthListGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".activity-btn");
      if (!button) return;

      if (button.dataset.caseIndex !== undefined){
        currentCollection = "cases";
        showActivity(Number(button.dataset.caseIndex));
        return;
      }

      if (button.dataset.activityIndex !== undefined){
        currentCollection = "activities";
        showActivity(Number(button.dataset.activityIndex));
      }
    });

    prevActivityBtn.addEventListener("click", () => {
      if (currentActivityIndex > 0){
        showActivity(currentActivityIndex - 1);
      }
    });

    nextActivityBtn.addEventListener("click", () => {
      const sourceData = currentCollection === "cases" ? caseStudiesData : activitiesData;
      if (currentActivityIndex < sourceData.length - 1){
        showActivity(currentActivityIndex + 1);
      }
    });

    depthActivityBody.addEventListener("click", (event) => {
      const image = event.target.closest(".activity-detail-shot img");
      if (!image) return;
      openImageLightbox(image.getAttribute("src"), image.getAttribute("alt"));
    });

    depthBackBtn.addEventListener("click", closeDepthFolder);
    depthBackdrop.addEventListener("click", closeDepthFolder);
    imageLightboxBackdrop.addEventListener("click", closeImageLightbox);
    imageLightboxClose.addEventListener("click", closeImageLightbox);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && imageLightbox.classList.contains("open")){
        closeImageLightbox();
      }
    });

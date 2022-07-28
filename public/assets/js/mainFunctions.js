'use strict';

function toggleBodyScroll(state) {
  if (state === 'show') {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
}

function toggleVideo(videoModal,state) {
  const iFrame = videoModal.querySelector("#iFrame").contentWindow;
  toggleBodyScroll(state);
  let func = "pauseVideo";
  if (state === 'show') {
    videoModal?.classList.add('show');
    func = "playVideo";
  } else {
    videoModal?.classList.remove('show');
    func = "pauseVideo";
  }
  iFrame.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function stickyHeader(header,sticky) {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

(function () {
  document.body.addEventListener('click',function (e) {
    // hide video modal on close button click
    const videoModal = document.getElementById('video-modal');
    if (e.target.id === 'close-modal') {
      e.preventDefault();
      //e.target.parentNode.parentNode.classList.remove('show');
      toggleVideo(videoModal,'hide');
    }
    // show video modal on video thumbnail click
    if (e.target.id === 'show-video-modal') {
      toggleVideo(videoModal,'show');
    }
    // close video modal on outside click
    if (e.target.id === 'video-modal' && e.target.dataset.closeOuotside === 'true') {
      toggleVideo(videoModal,'hide');
    }

    // accordion
    const collapsibleBtn = e.target.classList.contains('collapsible__head__action');
    if (collapsibleBtn) {
      const collapsibleBox = e.target.parentNode.parentNode;
      const siblings = document.getElementById('collapsible_parent_container').querySelectorAll('.collapsible');
      siblings.forEach(function (sibling) {
        if (sibling !== collapsibleBox) {
          sibling.classList.add('collapsible--collapsed');
        } else {
          collapsibleBox.classList.toggle('collapsible--collapsed');
        }
      });
    }

    // hamburger menu
    const hamburger = e.target.classList.contains('hamburger-menu');
    const menu_backdrop = e.target.classList.contains('mobile-menu');
    if (hamburger) {
      e.target.parentNode.parentNode.classList.toggle('is-active');
      const state = e.target.parentNode.classList.contains('is-active') ? 'show' : 'hide';
    }
    if (menu_backdrop || e.target.tarName === 'A') {
      e.target.parentNode.parentNode.previousElementSibling.classList.toggle('is-active');
      const state = e.target.parentNode.classList.contains('is-active') ? 'show' : 'hide';
    }
  });

  const smallDevice = window.matchMedia("(max-width: 400px)").matches;
  const githubButtonsTemplate = document.querySelector('#githubButtonsTemplate');
  const githubButtonsClone = githubButtonsTemplate.content.cloneNode(true);
  const githubButtonsContainer = document.querySelector('#githubButtonsContainer');
  const githubButtons = githubButtonsClone.querySelectorAll('.github-button');
  const githubButtonsRoot = document.createElement('div');
  githubButtonsRoot.className = 'github_actions';

  for (let githubButton of githubButtons) {
    githubButton.dataset.size = smallDevice ? "small" : "large";
    githubButtonsRoot.append(githubButton);
  }
  githubButtonsContainer.append(githubButtonsRoot);

  const header = document.getElementById("header");
  setTimeout(() => {
    let sticky = 0;
    if (header) {
      sticky = header.offsetTop;
    }
    window.onscroll = function () { stickyHeader(header,sticky) };
  },0);
}());

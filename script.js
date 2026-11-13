(function () {
  "use strict";

  const projects = [
    {
      title: "Corporate Governance",
      description: "Board structure, committees and governance framework.",
      viewLabel: "View",
      href: "corporate Governance/page1.html",
      image: "1.webp"
    },
    {
      title: "Updates & Announcements",
      description: "Latest filings, press releases and stock-exchange intimations.",
      viewLabel: "View",
      image: "2.webp"
    },
    {
      title: "Shareholding Pattern",
      description: "Quarterly disclosure of equity holding distribution.",
      viewLabel: "View",
        image: "3.webp"
    },
    {
      title: "Investor Presentation",
      description: "Decks, business updates and analyst material.",
      viewLabel: "View",
        image: "4.webp"
    },
    {
      title: "Dividend",
      description: "Declared and historical dividend information.",
      viewLabel: "View",
      href: "dividend/page1.html",
        image: "5.webp"
    },
    {
      title: "Financial Reports",
      description: "Quarterly, half-yearly and annual financial results.",
      viewLabel: "View",
      href: "financial-reports/page1.html",
        image: "6.webp"
    },
    {
      title: "Annual Report & Annual Return",
      description: "Audited annual reports and annual returns under the Companies Act.",
      viewLabel: "View",
      href: "annual-report/page1.html",
        image: "7.webp"
    },
    {
      title: "Policies",
      description: "Statutory policies and adopted by the Board.",
      viewLabel: "View",
        image: "8.webp"
    },
    {
      title: "Investor Grievances",
      description: "Investor complaints ,escalation and SCORES information.",
      viewLabel: "View",
      href: "investor-grievances/page1.html",
        image: "9.webp"
    },
    {
      title: "Board of Directors & Committees",
      description: "Directors of the Company, their roles and profiles.",
      viewLabel: "View",
      href: "board-directors/page1.html",
        image: "10.webp"
    },
    {
      title: "Contact Details",
      description: "Compliance officer,registrar and investor relation contacts.",
      viewLabel: "View",
      href: "contact-details/page1.html",
        image: "11.webp"
    },
    {
      title: "Disclosures under Regulation 46 of SEBI (LODR) Regulations, 2015",
      description: "Statutory disclosures required under Regulation 46 of SEBI(LODR).",
      viewLabel: "View",
      href: "regulation-46/index.html",
        image: "12.webp"
    }
  ];

  const grid = document.getElementById("projectGrid");

  if (!grid) {
    return;
  }

  function renderGrid() {
    const fragment = document.createDocumentFragment();

    projects.forEach(function (item) {
      const card = document.createElement("article");
      card.className = "project-card";
      card.setAttribute("role", "listitem");

      const media = document.createElement("div");
      media.className = "project-card-media";

      if (item.image) {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        img.className = "project-card-image";
        media.appendChild(img);
      }

      const body = document.createElement("div");
      body.className = "project-card-body";

      const title = document.createElement("h3");
      title.className = "project-card-country";
      title.textContent = item.title;

      const description = document.createElement("p");
      description.className = "project-card-description";
      description.textContent = item.description;

      const viewLink = document.createElement("a");
      viewLink.className = "project-card-view";
      viewLink.href = item.href || "#";
      viewLink.textContent = item.viewLabel;

      body.appendChild(title);
      body.appendChild(description);
      body.appendChild(viewLink);
      card.appendChild(media);
      card.appendChild(body);
      if (item.href) {
        card.style.cursor = "pointer";
        card.addEventListener("click", function () {
          window.location.href = item.href;
        });
      }
      fragment.appendChild(card);
    });

    grid.appendChild(fragment);
  }

  renderGrid();
})();

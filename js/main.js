const types = {
  xp: 'experience',
  edu: 'education'
};

const contacts = {
  Name: 'Harutyun Harutyunyan',
  Position: 'Senior Software Engineer',
  Linkedin: 'https://www.linkedin.com/in/haruth',
  Github: 'https://github.com/armlordharut',
  Profile: 'img/profile.jpg',
  Maps: 'Yerevan, Armenia',
  Location: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
  About: '<p>Software developer with 8+ years of experience working in the fields of artificial intelligence, '
    + 'finance, ecommerce, education and electronics automation. Seasoned problem-solving professional '
    + 'specializing on software architecture and automation. Some of the achievements I am proud of are: '
    + 'bootstrapping natural language processing technology at a startup, developing secure and automated '
    + 'electronic document system, creating automated software quality assurance frameworks. I’ve seen and '
    + 'worked with various technologies and languages, using the best for the problem.</p>'
    + '<p>I am passionate about artificial intelligence, financial software, open source and web technologies. '
    + 'I teach in my alma mater and in my spare time work on my personal projects, which varies from developing '
    + 'personal financing app to continuing my research in AI.</p>'
};

const experiences = [
  {
    Markup: '<div></div>',
    Key: 'BuBu34',
    Company: 'Praemium',
    Position: 'Software Developer',
    Description: 'Developing Electronic Account Management, used by financial advisers, for markets in Sydney, London and Hong Kong supporting more than 100k accounts.',
    Logo: 'img/Praemium.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://www.praemium.com/intl/',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'Financial Services (investment), Electronic Account Management',
    Technologies: 'C#, ASP.NET, Dapper, Angular, Microsoft SQL Server',
    Duration: {
      Start: new Date(Date.parse("2018-11-01T00:00:00+0000")),
      End: undefined,
      IncludeDetails: true
    }
  },
  {
    Markup: '<div>'
      + '<div>Teaching “Computer Organization” course based on my own course materials and syllabus.</div>'
      + '<div>Course includes:'
        + '<ul>'
          + '<li>High level knowledge of hardware architecture. Including high level understanding the way CPU cache works, registers, CMOS transistors.</li>'
          + '<li>Boolean algebra, number representation in x86 architecture, including optimization of formulas, floating point numbers.</li>'
          + '<li>Advanced Assembly language using NASM, including understanding the assembly compiles, working with stack, recursion in assembly.</li>'
        + '</ul>'
        + 'Course also includes midterm and homework design, and final project. At he end of this course students are being able to design and implement a software in NASM language. '
        + 'Design and optimze boolean formulas. Including conversion of their written code into byte code.'
      + '</div>'
    + '</div>',
    Key: 'Abu123',
    Company: 'American University of Armenia',
    Position: 'Adjunct Lecturer',
    Description: 'Teaching “Computer Organization” course based on my own course materials and syllabus. Course includes high level knowledge of hardware architecture and advanced Assembly language.',
    Logo: 'img/AUA.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://aua.am',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'Education',
    Technologies: 'Assembly, Hardware design',
    Duration: {
      Start: new Date(Date.parse("2017-09-01T00:00:00+0000")),
      End: undefined,
      IncludeDetails: true
    }
  },
  {
    Markup: '<div>'
      + '<div>Developed Electronic Document Management system for governmental customer, including document tracking, management, signage and secure storage.</div>'
      + '<div>As part of this work includes:'
        + '<ul>'
          + '<li>Implementing and supporting document signing protocols. Including storage and processing of documents and signatures.</li>'
          + '<li>Developing document generating mechanism, using templating mechanism, that reduced the time, for developers implementing custom reports, by half.</li>'
          + '<li>Desigining architecture around CQRS pattern, due to the future scale, and increasing of rate market share.</li>'
        + '</ul>'
        + 'Work is done in a fast-paced agile team.'
      + '</div>'
      + '<div>Integrated business requirements, of a new major customer, which yielded in two-fold increase of project’s income.</div>'
    + '</div>',
    Key: 'Kontur000',
    Company: 'SKB Kontur',
    Position: 'Software Engineer',
    Description: 'Developed Electronic Document Management system for governmental customer, including document tracking, management, signage and secure storage. As part of this implemented document signing protocols, document storage and processing. Work is done in a fast-paced agile team. Integrated business requirements, of a new major customer, which yielded in two-fold increase of project’s income.',
    Logo: 'img/Kontur.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://kontur.ru',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'Financial Services (accounting), Electronic Document Management',
    Technologies: 'C#, ASP.NET Core, EF Core, MVC, Microsoft SQL Server',
    Duration: {
      Start: new Date(Date.parse("2018-06-01T00:00:00+0000")),
      End: new Date(Date.parse("2018-11-01T00:00:00+0000")),
      IncludeDetails: true
    }
  },
  {
    Markup: '<div>'
      + 'Worked on internal and customer projects:'
      + '<ul>'
        + '<li>Bootstrapping an in-house, AI-based text processing, text analysis pipeline using ML and NLP algorithms. Main focus was on using Neural Network for predictions based on text content and context analysis, and fine-tuning processed data using NLP algorithms</li>'
        + '<li>Full-stack development of custom-tailored Learning Management System (LMS) for Mechner Foundation, an educational innovation non-profit. I worked on defining specification, architectural design back- and front-end development in collaboration with foundation’s stakeholders and educators. LMS was successfully piloted at foundation’s private schools and later expanded to public schools.</li>'
        + '<li>Developed warehouse automation tools for Carson-Dellosa Publishing LLC, an educational publisher. Work included communicating with management, warehouse staff and third-party vendors to define needs and goals. As a result, a web-based tool was created integrated into existing warehouse/logistics management software helping improve efficiency of day-to-day operations.</li>'
      + '</ul>'
    + '</div>',
    Key: 'Redkite563',
    Company: 'Redkite',
    Position: 'Senior Software Engineer',
    Description: 'Worked on internal and customer projects: -    Bootstrapping an in-house, AI-based text processing, text analysis pipeline using ML and NLP algorithms. Main focus was on using Neural Network for predictions based on text content and context analysis, and fine-tuning processed data using NLP algorithms -    Full-stack development of custom-tailored Learning Management System (LMS) for Mechner Foundation, an educational innovation non-profit. I worked on defining specification, architectural design back- and front-end development in collaboration with foundation’s stakeholders and educators. LMS was successfully piloted at foundation’s private schools and later expanded to public schools. -    Developed warehouse automation tools for Carson-Dellosa Publishing LLC, an educational publisher. Work included communicating with management, warehouse staff and third-party vendors to define needs and goals. As a result, a web-based tool was created integrated into existing warehouse/logistics management software helping improve efficiency of day-to-day operations.',
    Logo: 'img/Redkite.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://redkite.io/',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'e-Commerce, Behaiovarol Science',
    Technologies: 'C#, .NET Core, WCF, SOAP, MVC, Node.js (Express, MongoDb), JQuery/CSS, Python (TensorFlow, NLTK, Flask), Microsoft SQL Server',
    Duration: {
      Start: new Date(Date.parse("2016-02-01T00:00:00+0000")),
      End: new Date(Date.parse("2018-06-01T00:00:00+0000")),
      IncludeDetails: true
    }
  },
  {
    Markup: '<div>'
      + '<div>Conducting problem solving sessions in C++ and Java languages for CS department students.</div>'
      + '<div>Assisting students in understanding their homework assignment and project requirements. Discussing algorithms, possible solutions for problems, drawbacks and advantages.</div>'
    + '</div>',
    Key: 'Abu124',
    Company: 'American University of Armenia',
    Position: 'Teaching Associate',
    Description: 'Conducting problem solving sessions in C++ and Java languages for CS department students. Assisting students in understanding their homework assignment and projects requirements.',
    Logo: 'img/AUA.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://aua.am',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'Education',
    Technologies: 'Algorithms, C++, Java, Design Patterns, Data Structures',
    Duration: {
      Start: new Date(Date.parse("2016-02-01T00:00:00+0000")),
      End: new Date(Date.parse("2016-07-01T00:00:00+0000")),
      IncludeDetails: true
    }
  },
  {
    Markup: '<div>'
      + 'Worked on various projects, oriented on customer-specific feature implementation in Electronic Design Automation industry.'
      + '<ul>'
        + '<li>Developed user interface and report generation for manufacturing yield analysis software.</li>'
        + '<li>As part of internal research group worked on continuous improvement of development process, particularly developed a tool for daily quality report extraction and analysis.</li>'
        + '<li>The work included hyperparameter tweaking of an in-house Machine Learning algorithm used for yield prediction.</li>'
        + '<li>This helped to improve development cycle and for main product to become industry leading yield analysis tool.</li>'
      + '</ul>'
    + '</div>',
    Key: 'SNPS58-96',
    Company: 'Synopsys',
    Position: 'R&D Engineer I',
    Description: 'Worked on various projects, oriented on customer-specific feature implementation in Electronic Design Automation industry. Developed user interface and report generation for manufacturing yield analysis software. As part of internal research group worked on continuous improvement of development process, particularly developed a tool for daily quality report extraction and analysis. The work included hyperparameter tweaking of an in-house Machine Learning algorithm used for yield prediction. This helped to improve development cycle and for main product to become industry leading yield analysis tool.',
    Logo: 'img/Synopsys.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://www.synopsys.com/',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'EDA (Electronic Design Automation), Hardware Design',
    Technologies: 'Java, Python, Tcl, Perl',
    Duration: {
      Start: new Date(Date.parse("2013-12-01T00:00:00+0000")),
      End: new Date(Date.parse("2016-01-01T00:00:00+0000")),
      IncludeDetails: true
    }
  },
  {
    Markup: '<div>'
      + 'Worked on automating software QA, including regression and UI testing.'
      + '<ul>'
        + '<li>Main result was developing a new multi-platform (Linux and Windows) regression test framework, defined a new standard for the test case development.</li>'
        + '<li>Automated parallelization of test runs for Windows platform.</li>'
      + '</ul>'
    + '</div>',
    Key: 'SNPS58-97',
    Company: 'Synopsys',
    Position: 'Quality Engineer I',
    Description: 'Worked on automating software QA, including regression and UI testing. Main result was developing a new multi-platform (Linux and Windows) regression test framework, defined a new standard for the test case development. Automated parallelization of test runs for Windows platform.',
    Logo: 'img/Synopsys.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://www.synopsys.com/',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'EDA (Electronic Design Automation), Hardware Design',
    Technologies: 'Perl, Python, C#',
    Duration: {
      Start: new Date(Date.parse("2012-07-01T00:00:00+0000")),
      End: new Date(Date.parse("2013-12-01T00:00:00+0000")),
      IncludeDetails: true
    }
  },
  {
    Markup: '<div>'
      + 'Worked on various projects related to Electronic Design Automation.'
      + '<ul>'
        + '<li>Automated translation of integrated circuit verification rules between technologies.</li>'
        + '<li>Created ad-hoc scripts for workflow automation. Later became QA intern.</li>'
      + '</ul>'
    + '</div>',
    Key: 'SNPS58-98',
    Company: 'Synopsys',
    Position: 'Internship',
    Description: 'Worked on various projects related to Electronic Design Automation. Automated translation of integrated circuit verification rules between technologies. Created ad-hoc scripts for workflow automation. Later became QA intern.',
    Logo: 'img/Synopsys.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://www.synopsys.com/',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'Hardware Design, EDA (Electronic Design Automation)',
    Technologies: 'Perl, Bash',
    Duration: {
      Start: new Date(Date.parse("2011-08-01T00:00:00+0000")),
      End: new Date(Date.parse("2012-07-01T00:00:00+0000")),
      IncludeDetails: true
    }
  },
  {
    Markup: '<div>Optimization and refactoring of ad-hoc automation scripts.</div>',
    Key: 'Inta-65',
    Company: 'Instigate Design',
    Position: 'Internship',
    Description: 'Optimization and refactoring of ad-hoc automation scripts.',
    Logo: 'img/Instigate.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'http://ggg.instigatedesign.com/#1',
    Labels: {
      First: 'Industry',
      Second: 'Technologies'
    },
    Industry: 'Computer Software',
    Technologies: 'Bash, Makefile',
    Duration: {
      Start: new Date(Date.parse("2010-06-01T00:00:00+0000")),
      End: new Date(Date.parse("2010-07-01T00:00:00+0000")),
      IncludeDetails: true
    }
  }
];

const studies = [
  {
    Markup: '<div>Graduation work: Modelling an Interactive Multi-Agent System.</div>',
    Key: 'BuBu34_',
    Company: 'American University of Armenia',
    Position: 'Master\'s degree in Computer and Information Sciences',
    Description: 'Graduation work: Modelling an Interactive Multi-Agent System',
    Logo: 'img/AUA.png',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://aua.am',
    Labels: {
      First: 'Major',
      Second: 'Courses'
    },
    Industry: 'Computer Science, Entrepreneurship',
    Technologies: 'Advanced Algorithms, Neural Networks, Discrete Math',
    Duration: {
      Start: new Date(Date.parse("2012-09-01T00:00:00+0000")),
      End: new Date(Date.parse("2015-12-01T00:00:00+0000")),
      IncludeDetails: false
    }
  },
  {
    Markup: '<div>Graduation work: Analog and mixed signal circuits physical design automation tool.</div>',
    Key: 'Abu123_',
    Company: 'National Polytechnic University of Armenia',
    Position: 'Bachelor\'s degree in Engineering (Informatics and Computer Science)',
    Description: 'Graduation work: Analog and mixed signal circuits physical design automation tool.',
    Logo: 'img/SEUA.jfif',
    Location: 'Yerevan, Armenia',
    Maps: 'https://goo.gl/maps/jj2kWquvd2yXBtnm9',
    Web: 'https://polytech.am/',
    Labels: {
      First: 'Major',
      Second: 'Courses'
    },
    Industry: 'Computer Science, Automated Hardware Design',
    Technologies: 'Advanced Programming, Analog and Digital Hardware Design',
    Duration: {
      Start: new Date(Date.parse("2008-09-01T00:00:00+0000")),
      End: new Date(Date.parse("2012-07-01T00:00:00+0000")),
      IncludeDetails: false
    }
  }
];

function generateDuration(start, end, includeDetails) {
  const reg = /^.+ \d+ (\w+) (\d+)/;

  var temp = reg.exec(start.toGMTString());
  var matched = [(includeDetails ? temp[1] + ' ' : '') + temp[2]];
  if (!end) {
    end = new Date();
    matched.push('Present');
  } else {
    temp = reg.exec(end.toGMTString());
    matched.push((includeDetails ? temp[1] + ' ' : '') + temp[2]);
  }

  var deltaTime = Math.abs(start.getTime() - end.getTime());
  var deltaDays = Math.ceil(deltaTime / (1000 * 60 * 60 * 24));
  var days = deltaDays % 30;
  var allMonths = (deltaDays - days) / 30;
  var months = allMonths % 12;
  var years = (allMonths - months) / 12;

  var result = matched[0] + ' - ' + matched[1];
  if (includeDetails) {
    var result = matched[0] + ' - ' + matched[1] + ' • ' + (years === 0 ? '' : years + 'yrs ') + (months === 0 ? '' : months + 'mos');
  }
  return result;
}

function empty(id) {
  var node = document.getElementById(id);
  if (node !== null) {
    if( typeof Element.prototype.clearChildren === 'undefined' ) {
      Object.defineProperty(Element.prototype, 'clearChildren', {
        configurable: true,
        enumerable: false,
        value: function() {
          while(this.firstChild) this.removeChild(this.lastChild);
        }
      });
    }
    node.clearChildren();
  }
}

function addClass(id, className) {
  var node = document.getElementById(id);
  if (node !== null) {
    if( typeof Element.prototype.addClass === 'undefined' ) {
      Object.defineProperty(Element.prototype, 'addClass', {
        configurable: true,
        enumerable: false,
        value: function(className) {
          if (!this.classList.contains(className)) {
            this.classList.add(className);
          }
        }
      });
    }
    node.addClass(className);
  }
}

function removeClass(id, className) {
  var node = document.getElementById(id);
  if (node !== null) {
    if( typeof Element.prototype.removeClass === 'undefined' ) {
      Object.defineProperty(Element.prototype, 'removeClass', {
        configurable: true,
        enumerable: false,
        value: function(className) {
          if (this.classList.contains(className)) {
            this.classList.remove(className);
          }
        }
      });
    }
    node.removeClass(className);
  }
}

function hide(id) {
  var node = document.getElementById(id);
  if (node !== null) {
    if( typeof Element.prototype.hide === 'undefined' ) {
      Object.defineProperty(Element.prototype, 'hide', {
        configurable: true,
        enumerable: false,
        value: function() { this.style.display = 'none'; }
      });
    }
    node.hide();
  }
}

function show(id) {
  var node = document.getElementById(id);
  if (node !== null) {
    if( typeof Element.prototype.show === 'undefined' ) {
      Object.defineProperty(Element.prototype, 'show', {
        configurable: true,
        enumerable: false,
        value: function() { this.style.display = 'block'; }
      });
    }
    node.show();
  }
}

function append(id, text) {
  var node = document.getElementById(id);
  if (node !== null) {
    if( typeof Element.prototype.appendText === 'undefined' ) {
      Object.defineProperty(Element.prototype, 'appendText', {
        configurable: true,
        enumerable: false,
        value: function(text) {
          if (this.children.length > 0) {
            this.lastChild.insertAdjacentHTML('afterend', text);
          } else {
            this.innerHTML = text;
          }
        }
      });
    }
    node.appendText(text);
  }
}

function appendNode(id, nodes) {
  var node = find(id);
  if (node !== null) {
    while (nodes.children.length > 0) {
      console.log(nodes.children[0]);
      node.appendChild(nodes.children[0]);
    }
  }
}

var find = (id) => document.getElementById(id);

function fill(templateId, model) {
  var keyReg = /\{{2}([\w\.]+)\}{2}/g;
  var template = find(templateId);
  var keys = [];

  function getValue(path, obj) {
    if (path.includes('.')) {
      var _ = path.split('.');
      return getValue(_.slice(1), obj[_[0]]);
    } else {
      return obj[path];
    }
  };

  function findKeys(node) {
    var attr = node.attributes;
    if (attr !== null && attr !== undefined) {
      for (var i = 0; i < attr.length; i++) {
        var item = attr.item(i);
        var matched = [...item.value.matchAll(keyReg)];
        if (matched.length > 0) {
          matched.map(match => keys.push([item, 'nodeValue', item.nodeValue, match[1], match]));
        }
      }
    }

    if (node.childNodes !== undefined && node.childNodes.length > 0) {
      node.childNodes.forEach(child => { 
        if (child.nodeName === '#text') {
          var matched = [...child.data.matchAll(keyReg)];
          if (matched.length > 0) {
            if (child.nextSibling === null && child.previousSibling === null) {
              matched.map(match => keys.push([child.parentNode, 'innerHTML', child.data, match[1], match]));
            } else {
              matched.map(match => keys.push([child, 'data', child.data, match[1], match]));
            }
          }
        }
      });
    }

    if (node.children !== undefined && node.children.length > 0) {
      for (var index in node.children) {
        findKeys(node.children[index]);
      }
    }
  };

  var clone = template.cloneNode(true);
  findKeys(clone.content);
  console.log(keys);

  keys.forEach(key => 
    key[0][key[1]] = key[0][key[1]]
      .replace(key[4][0], getValue(key[3], model)));

  return clone;
}

function addContacts() {
  appendNode('contacts', fill('contacts_template', contacts).content);
}

function addCard(card, type) {
  var duration = generateDuration(card.Duration.Start, card.Duration.End, card.Duration.IncludeDetails);
  card.CalculatedDuration = duration;
  card.Type = type;
  appendNode(type + '_history', fill('cards_template', card).content);
}

function addArticle(card, type) {
  empty('article');
  addClass('article', 'fullscreen-article');
  appendNode('article', fill('article_template', card).content);
}

function closeArticle() {
  empty('article');
  removeClass('article', 'fullscreen-article');
}

function expandCard(key, type) {
  var list = [];
  switch (type) {
    case types.xp:
      list = experiences;
      break;
    case types.edu:
      list = studies;
      break;
  }

  var item = undefined;
  list.forEach(i => {
    item = i.Key === key ? i : item;
  });

  addArticle(item, type);
}

// todo: selecting Experience tab, when it is already
// selected removes visible article. Change that.
function addExperience() {
  experiences.forEach(xp => {
    addCard(xp, types.xp);
  });
  // addArticle(experiences[0]);
}

function addEducation() {
  studies.forEach(edu => {
    addCard(edu, types.edu);
  });
}

function generateContent() {
  addContacts();
  addExperience();
  addEducation();
}

function toggleTimeline() {
  empty('article');
  var target = event.target;
  if (target.id === types.xp) {
    show(types.xp + '_history');
    hide(types.edu + '_history');
  } else {
    show(types.edu + '_history');
    hide(types.xp + '_history');
  }
}

generateContent();
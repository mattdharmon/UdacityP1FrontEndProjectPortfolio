var React = require("react");
var ReactDOM = require("react-dom");
var projectData = [
  {
    id: 1,
    name: "Online Resume",
    image_link: "public/images/spires.jpg",
    link: "https://github.com/mattdharmon/UdacityP2FrontEndOnlineResume",
    details: "This project was designed to help me learn how to parse a json file and translate the information into a human readable webpage."
  },
  {
    id: 2,
    name: "Classic Arcade Game Clone",
    image_link: "public/images/flower.jpg",
    link: "https://github.com/mattdharmon/UdacityP3FrontEndFrogger",
    details: "This project was desinged to teach me Object Oriented Javascript and HTML5 Canvas by recreating the classic arcade game Frogger."
  },
  {
    id: 3,
    name: "Website Optimization",
    image_link: "public/images/gate.jpg",
    link: "https://github.com/mattdharmon/UdacityP4FrontEndOptimization",
    details: "This project was designed to teach me how to optimize a website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second."
  },
  {
    id: 4,
    name: "Neighborhood Map Project",
    image_link: "public/images/red_tree.jpg",
    link: "https://github.com/mattdharmon/UdacityP5FrontEndNeighborhoodProject",
    details: "This project was designed to teach me how to create a single page application and using third-party APIs for providing the data."
  },
  {
    id: 5,
    name: "Feed Reader Tester",
    image_link: "public/images/bird.jpg",
    link: "https://github.com/mattdharmon/UdacityP6FrontEndRSSFeedReaderTester",
    details: "This project was designed to teach me test driven development by completing a project started by another programmer that started the project."
  }
];

var Project = React.createClass({
  render: function() {
    return(
      <div className="col s12 m12 l6">
        <div className="card large">
          <div className="card-image">
            <img className="responsive-img" src={this.props.image_link} />
          </div>
          <div className="card-content">
            <span className="card-title"><h5>{this.props.name}</h5></span>
            <p>{this.props.details}</p>
          </div>
          <div className="card-action">
            <a href={this.props.link}>Github</a>
          </div>
        </div>
      </div>
    );
  }
});

var Projects = React.createClass({
  render: function() {
    var projectNodes = this.props.data.map(function(project) {
      return (
        <Project key={project.id} name={project.name} image_link={project.image_link} details={project.details} link={project.link} />
      );
    });
    return (
      <div className="row">
        {projectNodes}
      </div>
    );
  }
});

var ProjectSection = React.createClass({
  render: function() {
    return (
      <Projects data={this.state.data}/>
    );
  },
  getInitialState: function() {
    return {data: this.props.data};
  }
});

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
// var url = "public/resources/data/projectData.json";
var url = "public/resources/data/projectData.json";

ReactDOM.render(
  <ProjectSection data={projectData}/>,
  document.getElementById('projectSection')
);

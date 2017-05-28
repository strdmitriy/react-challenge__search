var CONTACTS = [
  {
    id: 1,
    name: 'Александр',
    number: '+322254534',
    image: 'img/chewbacca.gif'
  },
  {
    id: 2,
    name: 'Федор',
    number: '+32475623',
    image: 'img/chewbacca.gif'
  },
  {
    id: 3,
    name: 'Андрей',
    number: '+39685418',
    image: 'img/chewbacca.gif'
  }
];

var Contact = React.createClass({
  render: function() {
    return (
      <li className="contact">
        <img className="contact-image" src={this.props.image} width="60px" height="60px" />
        <div className="contact-info">
          <div className="contact-name"> {this.props.name} </div>
          <div className="contact-number"> {this.props.number} </div>
        </div>
      </li>
    );
  }
});

var ContactsList = React.createClass({
  getInitialState: function() {
    return {
      displayedContacts: CONTACTS
    };
  },
  handleSearch: function(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function(el) {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({
      displayedContacts: displayedContacts
    });
  },
  render: function() {
    return (
      <div className="contacts">
      <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
      <ul className="contacts-list">
      {
        this.state.displayedContacts.map(function(el) {
          return <Contact
          key={el.id}
          name={el.name}
          number={el.number}
          image={el.image}
          />;
        })
      }
      </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <ContactsList />,
  document.getElementById("content")
);

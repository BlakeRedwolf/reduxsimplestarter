import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>Title</label>
        <input 
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
         />
         <Field
          label="Tags"
          name="tags"
          component={this.renderField}
         />
      </form>
    );
  }
}

export default reduxForm({ 
  form: 'PostsNewForm'
 }) (PostsNew);
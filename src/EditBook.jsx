import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';

export function EditBook() {
  const [editbooks, seteditbook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://6594ad571493b011606abe33.mockapi.io/book/${id}`, {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((data) => seteditbook(data));
  }, [id]);

  const navigate = useNavigate();

  return editbooks ? <Editbookforms editbooks={editbooks} navigate={navigate} /> : <h1>Loading....</h1>;
}

function Editbookforms({ editbooks, navigate }) {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: editbooks.name,
      author: editbooks.author,
      published: editbooks.published,
      publisher: editbooks.publisher,
      description: editbooks.description,
      pages: editbooks.pages,
      website: editbooks.website,
    },
    onSubmit: (editdata) => {
      updatafun(editdata);
    },
  });

  const updatafun = async (editdata) => {
    await fetch(`https://6594ad571493b011606abe33.mockapi.io/book/${editbooks.id}`, {
      method: 'PUT',
      body: JSON.stringify(editdata),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    navigate('/books');
  };

  return (
    <div className="container">
      <div className="row mb-5 mt-5 d-flex text-light justify-content-center">
        <div className="col-md-6 col-lg-6 col-12">
          <div className="card bg-secondary">
            <h3 className="card-header mb-2 bg-dark text-center">Update Books</h3>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Title Books *
                  </label>
                  <input
                    className="form-control"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Author *
                  </label>
                  <input
                    className="form-control"
                    value={values.author}
                    name="author"
                    onChange={handleChange}
                    type="text"
                    placeholder="Author"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="published" className="form-label">
                    Published *
                  </label>
                  <input
                    className="form-control"
                    value={values.published}
                    name="published"
                    onChange={handleChange}
                    type="text"
                    placeholder="Published"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="publisher" className="form-label">
                    Publisher *
                  </label>
                  <input
                    className="form-control"
                    value={values.publisher}
                    name="publisher"
                    onChange={handleChange}
                    type="text"
                    placeholder="Publisher"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description *
                  </label>
                  <input
                    className="form-control"
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                    type="text"
                    placeholder="Description"
                  />
                </div>
                {values.website !== '' && values.pages !== '' ? (
                  <div>
                    <div className="mb-3">
                      <label htmlFor="pages" className="form-label">
                        Pages
                      </label>
                      <input
                        className="form-control"
                        value={values.pages}
                        name="pages"
                        onChange={handleChange}
                        type="text"
                        placeholder="Pages"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="website" className="form-label">
                        Website
                      </label>
                      <input
                        className="form-control"
                        value={values.website}
                        name="website"
                        onChange={handleChange}
                        type="text"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                ) : (
                  ''
                )}
                <div className="d-grid mt-3">
                  <button className="btn mb-2 btn-success" type="submit">
                    Update Books
                  </button>
                  <button className="btn btn-danger" onClick={() => navigate('/books')}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

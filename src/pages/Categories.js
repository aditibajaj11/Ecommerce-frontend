import React from 'react';
import useCategory from '../hooks/useCategory'; 
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { categories, loading, error } = useCategory(); // Destructure to get categories, loading, and error

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((c) => (
              <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                <div className="card">
                  <Link to={`/category/${c.slug}`} className="btn cat-btn">
                    {c.name}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No categories found.</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;


import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <section>
        <div className="contact-wrapper">
          <div className="content-wrapper text-center">
            <p className="title-text mb-0">Dedicated Platform</p>
            <p className="contact-heading">
              <span className="country-text">Indian</span>
              <span className="game-text">Gaming</span>{' '}
              <span className="industry-text">Industry</span>
            </p>
            <Link to="/contact">
              <button className="contact-btn">Contact us</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="key-section">
        <div className="container">
          <div className="logoimg" style={{ textAlign: 'center' }}>
            <img src="img/logo.png" style={{ marginBottom: '10px' }} alt="" />
          </div>
          <div className="mx-auto text-center">
            <p className="key-title"></p>
            <div className="heading-wrapper mx-auto">
              <p className="key-heading">Essential Features at a GameBiz</p>
              <p className="key-para">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="d-flex gap-4 mb-3">
                <div className="pt-1">
                  <img src="./img/Vector (3).png" alt="Feature Icon" />
                </div>
                <div>
                  <p className="features-heading mb-0">Financial Transaction Reconciliation</p>
                  <p className="features-deatils">
                    Ensuring accuracy and consistency in financial records through transaction reconciliation.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 mb-3">
                <div className="pt-1">
                  <img src="./img/Vector (3).png" alt="Feature Icon" />
                </div>
                <div>
                  <p className="features-heading mb-0">Skill Gaming Payment Consulting</p>
                  <p className="features-deatils">
                    Advisory services on payment solutions for skill-based gaming platforms.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 mb-3">
                <div className="pt-1">
                  <img src="./img/Vector (3).png" alt="Feature Icon" />
                </div>
                <div>
                  <p className="features-heading mb-0">Cyber & Fraud User Activity Management</p>
                  <p className="features-deatils">
                    Monitoring and managing user activity to prevent cyber threats and fraud.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 mb-3">
                <div className="pt-1">
                  <img src="./img/Vector (3).png" alt="Feature Icon" />
                </div>
                <div>
                  <p className="features-heading mb-0">Gaming Framework as per Government Guideline</p>
                  <p className="features-deatils">
                    Developing gaming frameworks compliant with government regulations and guidelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="d-flex gap-4 mb-3">
                <div className="pt-1">
                  <img src="./img/Vector (3).png" alt="Feature Icon" />
                </div>
                <div>
                  <p className="features-heading mb-0">Skill Gaming Consulting</p>
                  <p className="features-deatils">
                    Advisory services optimizing strategy, design, and compliance for skill-based gaming.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 mb-3">
                <div className="pt-1">
                  <img src="./img/Vector (3).png" alt="Feature Icon" />
                </div>
                <div>
                  <p className="features-heading mb-0">Contract and Framework Management</p>
                  <p className="features-deatils">
                    Efficient oversight of contracts, ensuring compliance and maximizing value.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 mb-3">
                <div className="pt-1">
                  <img src="./img/Vector (3).png" alt="Feature Icon" />
                </div>
                <div>
                  <p className="features-heading mb-0">e-KYC/Video KYC for Merchant and User</p>
                  <p className="features-deatils">
                    Digital identity verification for merchants and users via video-based KYC.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 mb-3">
                <div className="pt-1">
                  <img src="./img/Vector (3).png" alt="Feature Icon" />
                </div>
                <div>
                  <p className="features-heading mb-0">Gaming Intermediary Consulting</p>
                  <p className="features-deatils">
                    Expert guidance on regulatory, operational, and strategic aspects for gaming intermediaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

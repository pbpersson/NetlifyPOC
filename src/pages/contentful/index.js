// Navigate to http://localhost:3000/contentful
import { useState } from 'react';
import { getEntry } from "../api/contentful/entry";
import { getServiceOffices } from "../api/contentful/entries";

export default function Contentful({ data, serviceOffices }) {
  const fields = data.fields;

  const [option, setOption] = useState(serviceOffices?.items[0]);

  return (
    <div className="container">
      <div className="back-button">
        <div className="back-button-inner">
          <img src="/icons/back-arrow.svg" className="back-arrow" />
          <span>Back to home</span>
        </div>
      </div>
      <div className="contact-container">
        <h1 className="title">University Contacts</h1>
        <div className="card">
          <h2 className="card-title">Academic Counselor</h2>
          <div className="counselor">
            <div className="name">
              <h3>{fields.counselorFirstName} {fields.counselorLastName}</h3>
            </div>
            <div className="info">
              <div className="info-line">
                <img src="/icons/cell-text.svg" className="cell-text" />
                <div>
                  <span className="contact-link">Text me at {fields.counselorTextNumber}</span>
                </div>
              </div>
              <div className="info-line">
                <img src="/icons/call.svg" className="call" />
                <div>
                  <span className="contact-link">{fields.counselorCallNumber}</span>
                </div>
              </div>
              <div className="info-line">
                <img src="/icons/envelope.svg" className="envelope" />
                <div>
                  <div>
                    <span className="contact-link">{fields.counselorEmail}</span>
                  </div>
                  <div className="email-link">
                    <span>Email</span> <span className="name">{fields.counselorFirstName}</span> <img src="./icons/red-arrow.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-offices-container">
        <div className="service-offices">
          <div className="title">
            <p>Service Offices</p>
          </div>
          <div className="service-menu">
            <div className="tabs">
            {serviceOffices?.items?.map((so) => (
                <div key={so.sys.id} className={so.sys.id === option.sys.id ? 'selected' : ''} onClick={() => setOption(so)}>{so.fields.name}</div>
            ))}
          </div>
          </div>
          <div className="service-info">
          <div className="tab">
              <h2>{option.fields.title}</h2>
              <ul>
                {option?.fields?.links?.map(link => (
                  <li key={link.sys.id}>
                    <img src={link.fields.icon.fields.file.url} className={link.fields.icon.fields.file.fileName.replace('.svg', '')} />
                    <div>{link.fields.title}</div>
                  </li>
                ))}
              </ul>
              <div className="phone-hours">
                <h3>Phone/Text Hours:</h3>
                <p>Mon-Fri: 6am - 7pm (AZ time)</p>
              </div>
              <div className="closed">
                <p>Closed on major holidays</p>
              </div>
            </div>
            {/* <div className="tab">
              <h2>Academic Services Office</h2>
              <ul>
                <li>
                  <img src="/icons/chat.svg" className="chat" />
                  <div>Chat Now</div>
                </li>
                <li>
                  <img src="/icons/call.svg" className="call" />
                  <div>800-366-9699</div>
                </li>
                <li>
                  <img src="/icons/cell-text.svg" className="cell-text" />
                  <span>Text me at 89099</span>
                </li>
                <li>
                  <img src="/icons/envelope.svg" className="envelope" />
                  <div>student.services@phoenix.edu</div>
                </li>
              </ul>
              <div className="phone-hours">
                <h3>Phone/Text Hours:</h3>
                <p>Mon-Fri: 6am - 7pm (AZ time)</p>
              </div>
              <div className="closed">
                <p>Closed on major holidays</p>
              </div>
            </div> */}
            {/* <div className="tab">
              <h2>Academic Services Office</h2>
              <ul>
                <li>
                  <img src="/icons/chat.svg" className="chat" />
                  <div>Chat Now</div>
                </li>
                <li>
                  <img src="/icons/call.svg" className="call" />
                  <div>800-346-8679</div>
                </li>
                <li>
                  <img src="/icons/envelope.svg" className="envelope" />
                  <div>StudentFinancialServices@phoenix.edu</div>
                </li>
              </ul>
              <div className="phone-hours">
                <h3>Phone/Text Hours:</h3>
                <p>Mon-Fri: 6am - 7pm (AZ time)</p>
              </div>
              <div className="closed">
                <p>Closed on major holidays</p>
              </div>
            </div> */}
            {/* <div className="tab">
              <h2>Technical Support</h2>
              <ul>
                <li>
                  <img src="/icons/chat.svg" className="chat" />
                  <div>Chat Now</div>
                </li>
                <li>
                  <img src="/icons/call.svg" className="call" />
                  <div>877-832-4867</div>
                </li>
              </ul>
              <div className="phone-hours">
                <h3>Phone/Text Hours:</h3>
                <p>Daily: 5am - 1am (AZ time)</p>
              </div>
              <div className="closed">
                <p>Closed on major holidays</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const data = await getEntry('6Pg8Td483br855i76PGS4r');

//   return {
//     props: { data },
//   };
// }

// Changed to server side props so the id can be taken from the query params
// This is mainly used to test the Preview function of Contentful
export async function getServerSideProps({ query: { id }}) {
  console.log(id);
  const data = await getEntry(id || '6Pg8Td483br855i76PGS4r');
  const serviceOffices = await getServiceOffices();

  return {
    props: { data, serviceOffices },
  };
}

import React from 'react'
import { useState } from 'react';
import ArrowIcon from './ArrowIcon';


const ChatBot = () => {

  const [activeTab, setActiveTab] = useState('home');
  const [inputValue, setInputValue] = useState('');
  const [customSuggestions, setCustomSuggestions] = useState([
    'How do I get a refund?', 'what is the process for exchange?', 'Process to register a complain'
  ]);

  let index = Math.floor(Math.random());
  let suggestion = customSuggestions[index];

  const handleSuggestions = () => {
    const newInput = suggestion;
    setInputValue((prevInput) => [...prevInput, newInput]);
    newInput = '';
  }

  const handleEnterBtn = () => {
    setInputValue(inputValue.filter(i => i = ''));
  }

  return (
    <div className="container">
      <ul className="nav custom-tab-nav">
        <li className="nav-item">
          <button
            className={`custom-tab nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
            id='btn1'
          >
            AI Copilot
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`custom-tab nav-link ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
            id='btn2'
          >
            Details
          </button>
        </li>
        <li className="nav-item" id='icon-tab'>
          <button
            className={`custom-tab nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
            id='btn3'
          >
            <i className="bi bi-bookmarks-fill p-0 m-0"></i>
          </button>
        </li>
      </ul>

      <hr className='line'></hr>

      <div className="chat-box mt-1">

        {activeTab === 'home' &&
          <div className='ai-bot mt-1'>
            <div className='default-msg'>
              <i className="bi bi-robot"></i>
              <h4>Hi, I'm Fin AI Copilot</h4>
              <h6>Ask me anything about this conversation</h6>
            </div>
            <div className='user-box mb-1 pb-1'>
              <div className='suggestion-box'>
                <button id='suggested-text' onClick={handleSuggestions}> <b>Suggested:</b> &nbsp; {suggestion}</button>
              </div>

              <div className='input-box'>
                <input type='text' placeholder='Ask a Question...' id='search-box' value={inputValue}></input>
                <button className='enter-btn ' onClick={handleEnterBtn}> <ArrowIcon /></button>
              </div>
            </div>
          </div>
        }

        {activeTab === 'details' &&
          <div className='details'>

            <div className='member-details'>
              <div className='assignee'>
                <p>Assignee</p>
                <span> <i class="bi bi-person-circle"></i> Brian Byrrne</span>
              </div>

              <div className='team'>
                <p>Team</p>
                <span> <i className="bi bi-people-fill"></i> Unassigned</span>
              </div>
            </div>

            <div className='all-dropdowns mt-2'>

              <div className="details-accordion" id="accordionExample">

                <div className="details-accordion-item ml-2 pl-3">
                  <h2 className="details-accordion-header">
                    <button className="details-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#details-collapseOne" aria-expanded="true" aria-controls="details-collapseOne">
                      Links
                    </button>
                  </h2>

                  <div id="details-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="details-accordion-body ml-0 pl-0">

                      <div className='options ml-1'>
                        <p>Tracker ticket</p>
                        <button id='dropdown-btn'><i className="bi bi-plus-lg "></i> </button>
                      </div>

                      <div className='options ml-1'>
                        <p>Back-office tickets</p>
                        <button id='dropdown-btn'><i className="bi bi-plus-lg "></i> </button>
                      </div>

                      <div className='options ml-1'>
                        <p>Side conversations</p>
                        <button id='dropdown-btn'><i className="bi bi-plus-lg "></i> </button>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="details-accordion-item ml-2 pl-3">
                  <h2 className="details-accordion-header">
                    <button className="details-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#details-collapseTwo" aria-expanded="false" aria-controls="details-collapseTwo">
                      User Data
                    </button>
                  </h2>

                  <div id="details-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="details-accordion-body">
                      <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>

                <div className="details-accordion-item ml-2 pl-3">
                  <h2 className="details-accordion-header">
                    <button className="details-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#details-collapseThree" aria-expanded="false" aria-controls="details-collapseThree">
                      Conversation Attributes
                    </button>
                  </h2>

                  <div id="details-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="details-accordion-body">
                      <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>

                <div className="details-accordion-item ml-2 pl-3">
                  <h2 className="details-accordion-header">
                    <button className="details-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#details-collapseFour" aria-expanded="false" aria-controls="details-collapseFour">
                      Company Details
                    </button>
                  </h2>

                  <div id="details-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="details-accordion-body">
                      <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>

                <div className="details-accordion-item ml-2 pl-3">
                  <h2 className="details-accordion-header">
                    <button className="details-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#details-collapseFive" aria-expanded="false" aria-controls="details-collapseFive">
                      Salesforce
                    </button>
                  </h2>

                  <div id="details-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="details-accordion-body">
                      <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>

                <div className="details-accordion-item ml-2 pl-3">
                  <h2 className="details-accordion-header">
                    <button className="details-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#details-collapseSix" aria-expanded="false" aria-controls="details-collapseSix">
                      Stripe
                    </button>
                  </h2>

                  <div id="details-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="details-accordion-body">
                      <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>

                <div className="details-accordion-item ml-2 pl-3">
                  <h2 className="details-accordion-header">
                    <button className="details-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#details-collapseSeven" aria-expanded="false" aria-controls="details-collapseSeven">
                      Jira for tickets
                    </button>
                  </h2>

                  <div id="details-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="details-accordion-body">
                      <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>

              </div>


            </div>

          </div>
        }

        {activeTab === 'contact' &&
          <p>Here's the third section.</p>
        }

      </div>
    </div>
  );
};

export default ChatBot;

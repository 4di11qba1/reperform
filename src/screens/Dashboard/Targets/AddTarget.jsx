import React from "react";
import Form from "../../../components/Form";
import { colors } from "../../../constants/colors";
import Checkbox from "../../../components/Checkbox";

function AddTarget({ user }) {
  return (
    <>
      <Form heading={"Add New Target"}>
        <div className="add-target-form-body">
          <div className="form-input-div-wrapper">
            <div className="form-input-div" style={{ width: "100%" }}>
              <label htmlFor="fromDate">From Date</label>
              <input
                id="fromDate"
                type="date"
                name="fromDate"
                placeholder="dd/mm/yy"
                required
              />
            </div>
            <div className="form-input-div" style={{ width: "100%" }}>
              <label htmlFor="toDate">To Date</label>
              <input
                id="toDate"
                type="date"
                name="toDate"
                placeholder="dd/mm/yy"
                required
              />
            </div>
          </div>
          <div className="form-input-div-wrapper">
            <div className="form-input-div add-target-input-div">
              <label htmlFor="cgi">Annual CGI Target</label>
              <input
                id="cgi"
                type="number"
                name="cgi"
                placeholder="Enter Amount"
                required
              />
            </div>
            <div className="form-input-div add-target-input-div">
              <label htmlFor="commission">Average Commission</label>
              <input
                id="commission"
                type="number"
                name="commission"
                placeholder="Enter Amount"
                required
              />
            </div>
            <div className="form-input-div add-target-input-div">
              <label htmlFor="sales">Number of Sales Required</label>
              <input
                id="sales"
                type="number"
                name="sales"
                placeholder="Enter Number"
                required
              />
            </div>
          </div>
          <div className="form-input-div-wrapper">
            <div className="form-input-div add-target-input-div">
              <label htmlFor="sell-ratio">
                Conversion Rate - List to Sell Ratio
              </label>
              <input
                id="sell-ratio"
                type="number"
                name="sell-ratio"
                placeholder="%"
                required
              />
            </div>
            <div className="form-input-div add-target-input-div">
              <label htmlFor="listings">No. Listings Required</label>
              <input
                id="listings"
                type="number"
                name="listings"
                placeholder="Enter Number"
                required
              />
            </div>
            <div className="form-input-div add-target-input-div">
              <label htmlFor="list-ratio">
                Conversion Rate - Appraisal to List Ratio
              </label>
              <input
                id="list-ratio"
                type="number"
                name="list-ratio"
                placeholder="%"
                required
              />
            </div>
          </div>
          <div className="form-input-div-wrapper">
            <div className="form-input-div add-target-input-div">
              <label htmlFor="presentations">
                Listing Presentations Required
              </label>
              <input
                id="presentations"
                type="number"
                name="presentations"
                placeholder="Enter Number"
                required
              />
            </div>
            <div className="form-input-div add-target-input-div">
              <label htmlFor="appraisals-rate">
                Conversion Rate - Lead to Appraisals
              </label>
              <input
                id="appraisals-rate"
                type="number"
                name="appraisals-rate"
                placeholder="%"
                required
              />
            </div>
            <div className="form-input-div add-target-input-div">
              <label htmlFor="leads">Number of Leads Required</label>
              <input
                id="leads"
                type="number"
                name="leads"
                placeholder="Enter Number"
                required
              />
            </div>
          </div>
          <div className="form-input-div-wrapper">
            <div className="form-input-div add-target-input-div">
              <label htmlFor="leads-rate">
                Conversion Rate - Call to Leads
              </label>
              <input
                id="leads-rate"
                type="number"
                name="leads-rate"
                placeholder="%"
                required
              />
            </div>
            <div className="form-input-div add-target-input-div">
              <label htmlFor="calls">Number of Calls Required</label>
              <input
                id="calls"
                type="number"
                name="calls"
                placeholder="Enter Number"
                required
              />
            </div>
            <div className="form-input-div add-target-input-div">
              <label htmlFor="doorknocks-rate">
                Conversion Rate - Doorknocks to Leads
              </label>
              <input
                id="doorknocks-rate"
                type="number"
                name="doorknocks-rate"
                placeholder="%"
                required
              />
            </div>
          </div>
          <div className="form-input-div" style={{ width: "32%" }}>
            <label htmlFor="doorknocks">Number of DoorKnocks Required</label>
            <input
              id="doorknocks"
              type="text"
              name="doorknocks"
              placeholder="Enter Number"
              required
            />
          </div>

          {/* Have to render multiple Users */}

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3 style={{ color: colors.secondary }}>Assigned To User: </h3>
            <Checkbox text={user.userName} width="5%" fontSize="13px" />
          </div>
        </div>
      </Form>
    </>
  );
}

export default AddTarget;

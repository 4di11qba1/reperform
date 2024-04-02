import React from "react";
import Form from "../../../components/Form";
import Divider from "../../../components/Divider";
import Checkbox from "../../../components/Checkbox";

function Property() {
  return (
    <Form heading={"Property Management - Daily Log"}>
      <div className="property-section">
        <h4>Market Appraisals Booked</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="appraisals">Number</label>
          <input
            id="appraisals"
            type="number"
            name="appraisals"
            placeholder="Enter Market Appraisals Number"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>New Managements Signed</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="mgmt">Number</label>
          <input
            id="managements"
            type="number"
            name="managements"
            placeholder="Enter Managements Number"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Lost Managements</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="lost-mgmt">Number</label>
          <input
            id="lost-mgmt"
            type="number"
            name="lost-mgmt"
            placeholder="Enter Lost Managements Number"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>New Lease Signings</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="lease">Number</label>
          <input
            id="lease"
            type="number"
            name="lease"
            placeholder="Enter New Lease Number"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Routine Inspections</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="inspection">Number</label>
          <input
            id="inspection"
            type="number"
            name="inspection"
            placeholder="Enter Routine Inspections Number"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Ingoing Inspection Reports</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="in-inspection">Number</label>
          <input
            id="in-inspection"
            type="number"
            name="in-inspection"
            placeholder="Enter Ingoing Inspections Number"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Outgoing Inspection Reports</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="out-inspection">Number</label>
          <input
            id="out-inspection"
            type="number"
            name="out-inspection"
            placeholder="Enter Outgoing Inspections Number"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Vacate Notices Received</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="notices">Number</label>
          <input
            id="notices"
            type="number"
            name="notices"
            placeholder="Enter Vacate Notices Number"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Vacant Properties</h4>
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="form-input-div" style={{ alignSelf: "center" }}>
            <label htmlFor="vacant-properties">Vacancies</label>
            <input
              id="vacant-properties"
              type="number"
              name="vacant-properties"
              placeholder="Add Number"
            />
          </div>
          <div className="form-input-div" style={{ alignSelf: "center" }}>
            <label htmlFor="vacant-rates">Vacancy Rate</label>
            <input
              id="vacant-rates"
              type="number"
              name="vacant-rates"
              placeholder="Add %"
            />
          </div>
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Arrears</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="arrears">Amount $</label>
          <input
            id="arrears"
            type="number"
            name="arrears"
            placeholder="Enter Arreas"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Tribunal Matters</h4>
        <div
          className="form-input-div"
          style={{ alignSelf: "center", width: "40%" }}
        >
          <label htmlFor="tribunal">Address</label>
          <input
            id="tribunal"
            type="number"
            name="tribunal"
            placeholder="Enter Address"
          />
        </div>
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Training</h4>
        <Checkbox text={"Property Management Meeting"} fontSize="12px" />
        <Checkbox text={"Networking Event"} fontSize="12px" />
      </div>

      <Divider orientation={"h"} width={"1.5px"} />
      <div className="property-section">
        <h4>Wellness & Mindset</h4>
        <Checkbox text={"Exercise - gym, run, walk, sport"} fontSize="12px" />
      </div>
    </Form>
  );
}

export default Property;

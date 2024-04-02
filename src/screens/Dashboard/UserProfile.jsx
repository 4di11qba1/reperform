import React from "react";
import Form from "../../components/Form";

function UserProfile() {
  return (
    <>
      <Form heading={"Edit User"}>
        <div className="user-form-body">
          <div className="form-input-div-wrapper">
            <div className="form-input-div">
              <label htmlFor="name" aria-label="Name">
                Name
              </label>
              <input id="name" type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-input-div">
              <label htmlFor="email" aria-label="Email">
                Name
              </label>
              <input id="email" type="text" name="email" placeholder="Email" />
            </div>
          </div>

          <div className="form-input-div-wrapper">
            <div className="form-input-div">
              <label htmlFor="mobile" aria-label="Mobile">
                Mobile
              </label>
              <input
                id="mobile"
                type="text"
                name="mobile"
                placeholder="Mobile"
              />
            </div>
            <div className="form-input-div">
              <label htmlFor="office" aria-label="Office Name">
                Office Name
              </label>
              <input
                id="office"
                type="text"
                name="office"
                placeholder="Office"
              />
            </div>
          </div>

          <div className="form-input-div-wrapper">
            <div className="form-input-div">
              <label htmlFor="principal" aria-label="Principal Code">
                Principal Code
              </label>
              <input
                id="principal"
                type="text"
                name="principalCode"
                placeholder="Principal Code"
              />
            </div>
            <div
              className="form-input-div"
              style={{ width: "14.5%", alignSelf: "flex-end" }}
            >
              <label htmlFor="userImage" aria-label="User Image">
                User Image
              </label>
              <input
                id="userImage"
                type="file"
                name="userImage"
                placeholder="User Image"
                style={{ padding: "7px" }}
              />
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

export default UserProfile;

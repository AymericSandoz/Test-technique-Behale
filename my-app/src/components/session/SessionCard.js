import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CancelSession from "./CancelSession";
import CompleteSession from "./CompleteSession";
import UpdateSession from "./UpdateSession";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheckCircle,
  faClock,
  faEdit,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const SessionCard = ({ session, getSessions }) => {
  const [points, setPoints] = useState(Number);
  const [name, setName] = useState();
  const [edit, setEdit] = useState(false); //editing

  const editActionDone = () => {
    setEdit(false);
  };

  return (
    <>
      {!edit ? (
        <>
          <div className={!edit ? "session-card" : "display"}>
            <h3>{session.name}</h3>

            {session.statue === "Completed" && (
              <div className="session-statue completed">
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} />{" "}
                <p>{session.statue} </p>{" "}
              </div>
            )}
            {session.statue === "Cancelled" && (
              <div className="session-statue cancelled">
                {" "}
                <FontAwesomeIcon icon={faXmark} /> <p>{session.statue} </p>{" "}
              </div>
            )}
            {session.statue === "Planned" && (
              <div className="session-statue planned">
                {" "}
                <FontAwesomeIcon icon={faClock} /> <p>{session.statue} </p>{" "}
              </div>
            )}

            <div className="date-section">
              <FontAwesomeIcon
                icon={faCalendar}
                className="icon icon-calendar"
              />
              <span>{moment(session.date).format("dddd, MMMM Do")}</span>
            </div>

            <FontAwesomeIcon
              icon={faEdit}
              className={edit ? "edit-icon fa-edit" : "edit-icon center"}
              onClick={() => setEdit(!edit)}
            />
            <div className="edit-session">
              {session.statue !== "Cancelled" && (
                <CancelSession
                  session={session}
                  getSessions={getSessions}
                  editActionDone={editActionDone}
                />
              )}

              {session.statue !== "Completed" && (
                <CompleteSession
                  session={session}
                  getSessions={getSessions}
                  editActionDone={editActionDone}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <UpdateSession
          session={session}
          getSessions={getSessions}
          editActionDone={editActionDone}
          sessionStatue={session.statue}
        />
      )}
    </>
  );
};

export default SessionCard;

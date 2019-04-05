import React from "react";
import moment from "moment";

function SearchResults(props) {
  return (
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Emil</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Stay</th>
        </tr>
      </thead>

      {props.results.map(data => {
        return (
          <tbody>
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>
                {moment(data.checkOutDate).diff(
                  moment(data.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default SearchResults;

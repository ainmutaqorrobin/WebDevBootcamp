import { ChangeEventHandler } from "react";

const Dashboard = ({ inputName, handleChange }) => {
  return (
    <form
      className="flex flex-col gap-4 bg-primary-10 text-white"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="font-bold">Class Name</label>
        <input
          name={inputName}
          className="w-full"
          type="text"
          value={inputName}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

Dashboard.propTypes = {
  inputName: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Dashboard;

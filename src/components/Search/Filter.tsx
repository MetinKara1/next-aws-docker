import React, { useState } from "react";
import Checkbox from "../Checkbox/index";

const Filter = () => {
  const [filterList, setFilterList] = useState([
    {
      id: 1,
      filterName: "TYPE",
      list: [
        {
          id: 1,
          name: "Sport",
          selected: true,
        },
        {
          id: 2,
          name: "SUV",
          selected: false,
        },
        {
          id: 3,
          name: "MPV",
          selected: false,
        },
        {
          id: 4,
          name: "Sedan",
          selected: true,
        },
        {
          id: 5,
          name: "Coupe",
          selected: true,
        },
        {
          id: 7,
          name: "Hatchback",
          selected: true,
        },
      ],
    },
    {
      id: 2,
      filterName: "CAPACITY",
      list: [
        {
          id: 1,
          name: "2 Person",
          selected: true,
        },
        {
          id: 2,
          name: "4 Person",
          selected: false,
        },
        {
          id: 3,
          name: "6 Person",
          selected: true,
        },
        {
          id: 4,
          name: "8 Person",
          selected: false,
        },
      ],
    },
  ]);

  const onFilterClick = (filterName: string, id: number) => {
    setFilterList((prevData) =>
      prevData.map((filter) =>
        filter.filterName === filterName
          ? {
              ...filter,
              list: filter.list.map((item) =>
                item.id === id
                  ? { ...item, name: item.name, selected: !item.selected }
                  : item
              ),
            }
          : filter
      )
    );
  };

  return (
    <div className="border-0 min-w-[360px] h-full bg-white">
      <div className="pl-8 pt-8">
        {filterList.map((item, i) => {
          return (
            <div key={i}>
              <p className="text-xs text-[#90A3BF] mb-7">{item.filterName}</p>
              {item.list.map((filterItem) => {
                return (
                  <div
                    className="mb-8"
                    key={filterItem.id}
                    onClick={() =>
                      onFilterClick(item.filterName, filterItem.id)
                    }
                  >
                    <Checkbox
                      label={filterItem.name}
                      count={10}
                      value={filterItem.selected}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { sort, SortKey } from "features/Todos/slice";
import { Header } from "./styles";

const GridHeader = () => {
  const [sortKey, setSortKey] = useState(SortKey.priority);
  const [isAscending, setIsAscending] = useState(true);

  const dispatch = useDispatch();

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      return setIsAscending(!isAscending);
    }
    return setSortKey(key);
  };

  useEffect(() => {
    dispatch(sort({ SortKey: sortKey, isAscending }));
  }, [sortKey, isAscending, dispatch]);

  return (
    <>
      <Header onClick={() => handleSort(SortKey.priority)}>
        Priority
        {sortKey === SortKey.priority &&
          (isAscending ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              style={{ marginLeft: "5px", marginRight: "-5px" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginLeft: "5px", marginRight: "-5px" }}
            />
          ))}
      </Header>
      <Header>Todo</Header>
      <Header onClick={() => handleSort(SortKey.done)}>
        Completed
        {sortKey === SortKey.done &&
          (isAscending ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              style={{ marginLeft: "5px", marginRight: "-5px" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginLeft: "5px", marginRight: "-5px" }}
            />
          ))}
      </Header>
      <Header>Delete</Header>
    </>
  );
};

export default GridHeader;

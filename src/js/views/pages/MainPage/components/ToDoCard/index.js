import { Status } from "../../../../common/forms/Status/index.js";

export const ToDoCard = (
  id,
  cardImage,
  cardIcon,
  cardTitle,
  cardStatus,
  creatorImage,
  creatorName
) => {
  return `<div class="todo-card">
    <div class="todo-card--edit">
      <i class="fa-solid fa-ellipsis"></i>
    </div>
    <img
      class="todo-card--card-img"
      src="assets/images/card-img/htmlcss.jpg"
      alt="image not found"
      height="231px" />

    <div class="todo-card--card-body">
      <div class="todo-card--card-body--header">
        <img
          class="todo-card--card-body--header-img"
          src="assets/images/card-icon/giticon.png"
          onerror="this.onerror=null; this.src='assets/images/card-icon/notfound.svg'"
          alt="image not found"
          height="24px"
          width="24px" />
          <span>${id}</span>
        <h3
          class="todo-card--card-body--header-title text-overflow-handler">
          ${cardTitle}
        </h3>
      </div>

      ${Status(cardStatus, true)}

      <div class="todo-card--card-body--creator">
        <img
          class="todo-card--card-body-creator-img"
          src="assets/images/card-creator/mustafairshaid.jpeg"
          alt="image not found"
          height="24px"
          width="24px" />
        <h5
          class="todo-card--card-body-creator-title text-overflow-handler">
          ${creatorName}
        </h5>
      </div>
    </div>
  </div>`;
};

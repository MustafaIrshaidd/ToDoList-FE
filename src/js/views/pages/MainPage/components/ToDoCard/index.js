import { Status } from "../../../../common/forms/Status/index.js";

export const ToDoCard = (
  id,
  cardImage,
  cardIcon,
  cardTitle,
  cardStatus,
  creatorImage,
  creatorName,
  index
) => {
  return `<div class="todo-card">
    
    <i class="fa-solid fa-ellipsis edit-btn edit-btn--card"></i>
    
    
    <div class="todo-card--card-img-container">
    <img
        class="todo-card--card-img"
        src="${cardImage}"
        alt="image not found"
        height="231px"
        onerror="this.style.display='none'; this.parentNode.style.backgroundColor='white'; this.parentNode.style.display='block';"
    />
    </div>

    <div class="todo-card--card-body">
      <div class="todo-card--card-body--header">
        <img
          class="todo-card--card-body--header-img"
          src="${cardIcon}"
          onerror="this.onerror=null; this.src='assets/images/card-icon/notfound.svg'"
          alt="image not found"
          height="24px"
          width="24px" />
          <span class="index">${index}</span>
          <span class="id">${id}</span>
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

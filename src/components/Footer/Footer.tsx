import { memo } from 'react';
import cn from 'classnames';
import { FilterType } from '../../types/FilterType';

interface Props {
  itemsLeft: number,
  filter: FilterType,
  setFilter: (filter: FilterType) => void,
}

export const Footer:React.FC<Props> = memo(({
  itemsLeft,
  filter,
  setFilter,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="todosCounter">
        {`${itemsLeft} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          data-cy="FilterLinkAll"
          href="#/"
          className={cn('filter__link', {
            selected: filter === FilterType.ALL,
          })}
          onClick={() => setFilter(FilterType.ALL)}
        >
          All
        </a>

        <a
          data-cy="FilterLinkActive"
          href="#/active"
          className={cn('filter__link', {
            selected: filter === FilterType.ACTIVE,
          })}
          onClick={() => setFilter(FilterType.ACTIVE)}
        >
          Active
        </a>
        <a
          data-cy="FilterLinkCompleted"
          href="#/completed"
          className={cn('filter__link', {
            selected: filter === FilterType.COMPLETED,
          })}
          onClick={() => setFilter(FilterType.COMPLETED)}
        >
          Completed
        </a>
      </nav>

      <button
        data-cy="ClearCompletedButton"
        type="button"
        className="todoapp__clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
});
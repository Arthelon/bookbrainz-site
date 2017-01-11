/*
 * Copyright (C) 2016  Daniel Hsing
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import {
	ADD_RELATIONSHIP,
	HIDE_RELATIONSHIP_EDITOR,
	REMOVE_RELATIONSHIP,
	UPDATE_RELATIONSHIP_SOURCE,
	UPDATE_RELATIONSHIP_TARGET,
	UPDATE_RELATIONSHIP_TYPE
} from './actions';
import {OrderedMap, fromJS} from 'immutable';

const DEFAULT_RELATIONSHIP = fromJS({
	source: null,
	type: null,
	target: null
});

function reducer(
	state = fromJS({
		shown: true,
		relationships: OrderedMap()
	}),
	action
) {
	switch (action.type) {
		case ADD_RELATIONSHIP:
			return state.setIn(['relationships', action.rowId],
				DEFAULT_RELATIONSHIP
			);
		case HIDE_RELATIONSHIP_EDITOR:
			return state.set('shown', false);
		case REMOVE_RELATIONSHIP:
			return state.deleteIn(['relationships', action.rowId]);
		case UPDATE_RELATIONSHIP_SOURCE:
			return state.setIn(['relationships', action.rowId, 'source'],
				action.value
			);
		case UPDATE_RELATIONSHIP_TYPE:
			return state.setIn(['relationships', action.rowId, 'type'],
				action.value
			);
		case UPDATE_RELATIONSHIP_TARGET:
			return state.setIn(['relationships', action.rowId, 'target'],
				action.value
			);

		// no default
	}
	return state;
}

export default reducer;

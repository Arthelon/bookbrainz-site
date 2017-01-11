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
export const ADD_RELATIONSHIP = 'ADD_RELATIONSHIP';
export const HIDE_RELATIONSHIP_EDITOR = 'HIDE_RELATIONSHIP_EDITOR';
export const REMOVE_RELATIONSHIP = 'REMOVE_RELATIONSHIP';
export const UPDATE_RELATIONSHIP_SOURCE = 'UPDATE_RELATIONSHIP_SOURCE';
export const UPDATE_RELATIONSHIP_TARGET = 'UPDATE_RELATIONSHIP_TARGET';
export const UPDATE_RELATIONSHIP_TYPE = 'UPDATE_RELATIONSHIP_TYPE';

let nextRelationshipRowId = 0;
export function addRelationship() {
	return {
		type: ADD_RELATIONSHIP,
		rowId: `nextRelationshipRow${nextRelationshipRowId++}`
	};
}

export function hideRelationshipEditor() {
	return {
		type: HIDE_RELATIONSHIP_EDITOR
	};
}

export function removeRelationship(rowId) {
	return {
		type: REMOVE_RELATIONSHIP,
		rowId
	};
}

export function updateRelationshipSource(rowId, value) {
	return {
		type: UPDATE_RELATIONSHIP_SOURCE,
		rowId,
		value
	};
}

export function updateRelationshipTarget(rowId, value) {
	return {
		type: UPDATE_RELATIONSHIP_TARGET,
		rowId,
		value
	};
}

export function updateRelationshipType(rowId, value) {
	return {
		type: UPDATE_RELATIONSHIP_TYPE,
		rowId,
		value
	};
}

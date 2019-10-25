import { ShopActionTypes } from './shop-types'

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
})

const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
    return async dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        try {
            const snapshot = await collectionRef.get()
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        } catch (error) {
            dispatch(fetchCollectionsFailure(error.message))
        }
    }
}

import { takeLatest } from 'redux-saga/effects'
import loadWeb3 from './loadWeb3Saga'


export default function* root() {
    yield[
        takeLatest('SAGA_LOAD_WEB3', loadWeb3 )
    ]
}
console.log("Welcome to the main module")
import {CriminalFinalHTML} from './criminals/CriminalList.js'
CriminalFinalHTML()
import {ConvictionSelect} from './convictions/ConvictionSelect.js'
ConvictionSelect ()
import {OfficerSelect} from './officers/OfficerSelect.js'
import { NoteList } from '../notes/NoteList.js'
import { NoteForm } from '../notes/NoteForm.js'
import { AlibiEventListener } from './criminals/AlibiList.js'
import { WitnessSelect } from './witnesses/WitnessSelect.js'
import { WitnessEventListener } from './witnesses/WitnessList.js'
import {CriminalSelect} from './criminals/CriminalSelect.js'

OfficerSelect()
NoteList()
NoteForm()
AlibiEventListener()
WitnessSelect()
WitnessEventListener()
CriminalSelect()
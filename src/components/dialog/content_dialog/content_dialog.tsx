import { Card, CardContent } from "@material-ui/core";
import React from "react";
import { Character } from "../../../models/app";
import { CharacterState, NormalState, SpecialState, SpecialVariantState } from "../../../models/app/helper_models/content.models";
import CharacterDialog from "./content-types/character/character_dialog";
import NormalDialog from "./content-types/normal/normal_dialog";
import SpecialDialog from "./content-types/special/special_dialog";
import SpecialVariantDialog from "./content-types/special_variant/special_variant_dialog";
import './content_dialog.scss'

export interface OwnProps {
    editStatus: string | undefined;
    editType: string | undefined;
    loading: boolean;
    currentCharacter: Character | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    characterContent: (character: CharacterState, action: string | undefined, id?: number) => void;
    normalContent: (normal: NormalState, currentCharacter: number | undefined, action: string | undefined) => void;
    specialContent: (special: SpecialState, currentCharacter: number | undefined, action: string | undefined) => void;
    specialVariantContent: (special_variant: SpecialVariantState, currentCharacter: number | undefined, action: string | undefined) => void;
    contentTarget?: string | undefined;
    contentParent?: string | undefined,
}

export type ContentDialogProps = OwnProps;

export const renderContentType = (
    type: string | undefined, 
    loading: boolean,
    editStatus: string | undefined, 
    currentCharacter: Character | undefined,
    onChange: { (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>): void }, 
    characterContent: { (character: CharacterState, action: string | undefined, id?: number): void },
    normalContent: { (normal: NormalState, currentCharacter: number | undefined, action: string | undefined, contenTarget?: string | undefined): void },
    specialContent: { (special: SpecialState, currentCharacter: number | undefined, action: string | undefined): void },
    specialVariantContent: { (special_variant: SpecialVariantState, currentCharacter: number | undefined, action: string | undefined): void },
    contentTarget?: string | undefined,
    contentParent?: string | undefined,
    ) => {
    switch(type){
        case 'character':
            return <CharacterDialog  onChange={onChange} currentCharacter={currentCharacter} characterContent={characterContent} loading={loading} editStatus={editStatus} />
        case 'normal':
            return <NormalDialog onChange={onChange} currentCharacter={currentCharacter} normalContent={normalContent} loading={loading} editStatus={editStatus} contentTarget={contentTarget} />
        case 'special':
            return <SpecialDialog onChange={onChange} currentCharacter={currentCharacter} specialContent={specialContent} loading={loading} editStatus={editStatus} contentTarget={contentTarget}/>
        case 'special_variant':
            return <SpecialVariantDialog onChange={onChange} currentCharacter={currentCharacter} specialVariantContent={specialVariantContent} loading={loading} editStatus={editStatus} contentTarget={contentTarget} contentParent={contentParent} />
        case 'super':
            return 'super'
        case 'super_variant':
            return 'super_variant'
        case 'assist':
            return 'assist'
        default:
            return "No content type selected. Oops?"
    }    
}
    
const ContentDialog = (props: ContentDialogProps) => {
    const { editStatus,
            editType, 
            loading, 
            currentCharacter, 
            contentTarget, 
            contentParent,
            onChange, 
            characterContent, 
            normalContent, 
            specialContent,
            specialVariantContent,
        } = props;
    return (
        <Card className={`content-dialog ${editType}`}>
            <CardContent className="content-card-contents">
                <div className="content-dialog-contents">
                    <div className="content-title">
                        {`${editStatus} ${editType}`}
                    </div>
                    <div className="contents">
                        {
                            renderContentType(editType, 
                                loading, 
                                editStatus, 
                                currentCharacter, 
                                onChange, 
                                characterContent, 
                                normalContent, 
                                specialContent, 
                                specialVariantContent,
                                contentTarget,
                                contentParent)
                        }
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContentDialog;
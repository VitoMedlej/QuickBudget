"use client"
import Form from '../common/Form';
import Headline from '../common/Headline';
import {ContactProps} from '@/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import HttpClient from '@/utils/httpclient';

const Contact2 = ({
    header,
    form,
    id,
    hasBackground = false
} : ContactProps) => {

    const handleSubmit = async(event : any, values : any) => {
        try {
            event.preventDefault();
            const client = new HttpClient()
            const req = await client.post('https://api.example.com/data', {values});

            console.log('req: ', req);

        } catch (error) {
            console.error('GET request failed:', error);
        };
    }

    return (

        <WidgetWrapper
            id={id
            ? id
            : ''}
            hasBackground={hasBackground}
            containerClass="max-w-7xl mx-auto">
            {header && <Headline header={header} titleClass="text-3xl sm:text-5xl"/>}
            <div className="flex items-stretch justify-center">
                <Form
                    handleSubmit={handleSubmit}
                    {...form}
                    containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12"
                    btnPosition="right"/>
            </div>
        </WidgetWrapper>
    )

};

export default Contact2;

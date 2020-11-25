import React from 'react';
import {
    Grid,
    Row,
    Col,
    Input,
    InputNumber
} from 'rsuite';

import Select from './form/Select';
import Checkbox from './form/Checkbox';
import Textarea from './form/Textarea';
import ImagePosition from './ImagePosition';

const sheetThickness = [
    30,
    40,
    50,
    80,
    90,
    100,
    110,
    120,
    130,
    150,
    180,
    200,
    250,
    300
];

const sheetThicknessOptions = sheetThickness.map(thickness => ({
    label: `${thickness} μm`,
    value: thickness
}));

const OrderForm: React.FC<{}> = () => (
    <form>
        <Grid fluid>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>File data is for PCB side?</b>
                </Col>
                <Col xs={7}>
                    <Checkbox checked />
                </Col>
                <Col xs={5}>
                    <b>Sheet thickness:</b>
                </Col>
                <Col xs={7}>
                    <Select
                        value={''}
                        notSelectedText="Not selected"
                        requiredMessage="This field is required"
                        options={sheetThicknessOptions}
                    />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>SMT Stencil type:</b>
                </Col>
                <Col xs={7}>
                    <Select
                        value={''}
                        notSelectedText="Not selected"
                        requiredMessage="This field is required"
                        options={[
                            {
                                label: 'Framed SMT Stencil',
                                value: 'framed'
                            },
                            {
                                label: 'SMT Stencil for quick clamping frame',
                                value: 'clamping-frame'
                            },
                            {
                                label: 'SMT Stencil for hand printing',
                                value: 'hand-printing'
                            }
                        ]}
                    />
                </Col>
                <Col xs={5}>
                    <b>Frame size:</b>
                </Col>
                <Col xs={7}>
                    <Select
                        value={''}
                        notSelectedText="Not selected"
                        requiredMessage="This field is required"
                        options={[
                            {
                                label: '23" x 23" (584mm x 584mm)',
                                value: 'small'
                            },
                            {
                                label: '29" x 29" (736mm x 736mm)',
                                value: 'large'
                            },
                            {
                                label: '560mm x 720mm',
                                value: 'mid'
                            }
                        ]}
                    />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>Fiducial marks:</b>
                </Col>
                <Col xs={7}>
                    <Select
                        value={''}
                        notSelectedText="Not selected"
                        requiredMessage="This field is required"
                        options={[
                            {
                                label: 'None',
                                value: 'none'
                            },
                            {
                                label: 'Engraved',
                                value: 'engraved'
                            },
                            {
                                label: 'Cut',
                                value: 'cut'
                            }
                        ]}
                    />
                </Col>
                <Col xs={5}>
                    <b>Marks side:</b>
                </Col>
                <Col xs={7}>
                    <Select
                        value={''}
                        notSelectedText="Not selected"
                        requiredMessage="This field is required"
                        options={[
                            {
                                label: 'Both sides',
                                value: 'both-sides'
                            },
                            {
                                label: 'PCB side',
                                value: 'pcb'
                            },
                            {
                                label: 'Squeegee side',
                                value: 'squeege'
                            }
                        ]}
                    />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={24}>
                    <div>
                        <b>Apertures modifications and image positioning requirements:</b>
                        <Textarea
                            placeholder="Modification requirements"
                            rows={7}
                        />
                        <span>Please describe all requirements for apertures modification and image positioning.</span>
                    </div>
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>Squeegee side text:</b>
                </Col>
                <Col xs={19}>
                    <Input />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>PCB side text:</b>
                </Col>
                <Col xs={19}>
                    <Input />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>Multiply (panalize):</b>
                </Col>
                <Col xs={7}>
                    <Checkbox checked />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>Panels count at X:</b>
                </Col>
                <Col xs={7}>
                    <InputNumber />
                </Col>
                <Col xs={5}>
                    <b>Panels count at Y:</b>
                </Col>
                <Col xs={7}>
                    <InputNumber />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>X step (mm):</b>
                </Col>
                <Col xs={7}>
                    <InputNumber />
                </Col>
                <Col xs={5}>
                    <b>Y step (mm):</b>
                </Col>
                <Col xs={7}>
                    <InputNumber />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>Position:</b>
                </Col>
                <Col xs={7}>
                    <Select
                        value={'pcb-centered'}
                        notSelectedText="Not selected"
                        requiredMessage="This field is required"
                        options={[
                            {
                                label: 'Layout centered',
                                value: 'layout-centered'
                            },
                            {
                                label: 'PCB centered',
                                value: 'pcb-centered'
                            }
                        ]}
                    />
                </Col>
                <Col xs={5}>
                    <b>Image position:</b>
                </Col>
                <Col xs={7}>
                    <ImagePosition
                        value={'horizontal'}
                        notSelectedText="Not selected"
                        requiredMessage="This field is required"
                        label={{
                            horizontal: 'Horizontal',
                            vertical: 'Vertical'
                        }}
                    />
                </Col>
            </Row>
            <Row gutter={24} className="form-row">
                <Col xs={5}>
                    <b>Nano coating:</b>
                </Col>
                <Col xs={7}>
                    <Checkbox checked={false} />
                </Col>
                <Col xs={5}>
                    <b>Electrochemical polishing:</b>
                </Col>
                <Col xs={7}>
                    <Checkbox checked={false} />
                </Col>
            </Row>
        </Grid>
    </form>
);

export default OrderForm;
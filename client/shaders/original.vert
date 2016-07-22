attribute vec4 position;
attribute vec2 texCoord;

uniform mat4 uMMatrix;
uniform mat4 uVMatrix;
uniform mat4 uPMatrix;

uniform float uLivetime;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position   = uPMatrix *  uVMatrix * uMMatrix * position;
    vTextureCoord = texCoord;
}
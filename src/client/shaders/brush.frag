#ifdef GL_ES
precision highp float;
#endif

varying vec2 vUV;

uniform sampler2D stamp;

uniform vec4 color;
uniform float size;
uniform float flow;
uniform float angle;
uniform float spread;

uniform vec2 loc_from;
uniform vec2 loc_to;


bool is_between (float v, float limit1, float limit2, float tolerance)
{
	if (limit1 > limit2)
		return v <= limit1 + tolerance && v >= limit2 - tolerance;
	else
		return v >= limit1 - tolerance && v <= limit2 + tolerance;

}

bool is_in_box (vec2 p, vec2 corner1, vec2 corner2, float tolerance)
{
	return 
		is_between(p.x, corner1.x, corner2.x, tolerance) &&
		is_between(p.y, corner1.y, corner2.y, tolerance);
}

void main()
{
	//Eliminate: if gl_FragCoord.x and gl_FragCoord.y are outside of box formed by from_to PLUS size, return transparent
	//line from-to = from loc_from to loc_to
	//line normal, intersects from-to at right angle
	//intersect, point at intersection of from-to and normal
	//get: length of intersect
	//get: length of from-intersect/length of from-to


	//float dist = sqrt(pow(gl_FragCoord.x - location.x, 2.) + pow(gl_FragCoord.y - location.y, 2.));
	if (is_in_box(gl_FragCoord.xy, loc_from, loc_to, size))
		gl_FragColor = vec4((color.rg * gl_FragCoord.y / 500.0), color.b, color.a);
	//if (dist < size)
	//	gl_FragColor = vec4(color.rgb, color.a * ((size-dist)/size)* spread);
}
